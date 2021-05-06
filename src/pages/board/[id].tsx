import React, { useState } from 'react';
import { API, withSSRContext } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import { getBoard } from '../../graphql/queries';
import {
  Board,
  Column,
  GetBoardQuery,
  GetBoardQueryVariables,
  TicketInput,
  UpdateColumnMutation,
  UpdateColumnMutationVariables,
} from '../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import UserHeader from '../../components/Headers/UserHeader';
import Image from 'next/image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ColumnComponent from '../../components/boardview/Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import { updateColumn } from '../../graphql/mutations';

const useStyles = makeStyles((theme: Theme) => ({
  backgroundImage: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: -1,
  },
  title: {
    color: '#172b4d',
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '8px',
  },
}));

interface Props {
  board: Board;
}

export default function IndividualBoardPage({ board }: Props) {
  // Extract out the columns and tickets into state and use the right type from the board prop
  const [columns] = useState<Column[]>(board.columns?.items as Column[]);

  console.log('Columns:', columns);

  // https://github.com/atlassian/react-beautiful-dnd/issues/1756
  resetServerContext();

  const classes = useStyles();
  console.log('Board:', board);

  const onDragEnd = async (result: DropResult): void => {
    const { source, destination } = result;
    console.log('Dragged from:', source, 'to:', destination);

    // handle the state and then make a mutation to GraphQL API

    // Path 0: Moving out of bounds or moving nowhere
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    // Path 1: Moving from one column to the same column.
    if (source.droppableId === destination.droppableId) {
      // Get the relevant column
      const destinationColumn = columns.find(
        (c) => c.id === destination.droppableId
      );
      // Should always find it
      if (destinationColumn && destinationColumn.tickets) {
        const existingTickets = [...destinationColumn.tickets];
        // remove it from the source index
        const [removed] = existingTickets.splice(source.index, 1);

        // add it back to the destination index
        const newTickets = existingTickets.splice(
          destination.index,
          0,
          removed
        ) as TicketInput[];

        // make a call to update the thang
        const input: UpdateColumnMutationVariables = {
          input: {
            id: destination.droppableId, // id of the column
            tickets: newTickets,
          },
        };

        (await API.graphql({
          query: updateColumn,
          variables: input,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as UpdateColumnMutation;
      }
    }

    // Path 2: Moving from one column to another column
    if (source.droppableId != destination.droppableId) {
      // Get the relevant columns
      const sourceColumn = columns.find((c) => c.id === source.droppableId);
      const destinationColumn = columns.find(
        (c) => c.id === destination.droppableId
      );

      console.log('do something for moving it.');
    }
  };

  return (
    <React.Fragment>
      <div className={classes.backgroundImage}>
        <Image
          alt={board.name}
          src='/boards/beach.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <UserHeader st={'grey'} />
      <div style={{ padding: '16px' }}>
        <Typography variant='h5' className={classes.title}>
          {board.name}
        </Typography>

        <DragDropContext onDragEnd={onDragEnd}>
          <Grid
            container
            direction='row'
            alignItems='flex-start'
            justify='flex-start'
            spacing={1}
          >
            {columns.map((column) => (
              <ColumnComponent column={column} key={column?.id} />
            ))}
          </Grid>
        </DragDropContext>
      </div>
    </React.Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const SSR = withSSRContext({ req });

  const input: GetBoardQueryVariables = {
    id: context?.params?.id as string,
  };

  const response = (await SSR.API.graphql({
    query: getBoard,
    variables: input,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: GetBoardQuery; errors: any[] };

  return {
    props: {
      board: response.data.getBoard,
    },
  };
};
