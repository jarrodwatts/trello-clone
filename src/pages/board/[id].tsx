import React, { useState } from 'react';
import { withSSRContext } from 'aws-amplify';
import { GetServerSideProps } from 'next';
import { getBoard } from '../../graphql/queries';
import {
  Board,
  Column,
  GetBoardQuery,
  GetBoardQueryVariables,
  Ticket,
} from '../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import UserHeader from '../../components/Headers/UserHeader';
import Image from 'next/image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ColumnComponent from '../../components/boardview/Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';

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
  const [tickets, setTickets] = useState<Ticket[]>(
    board.columns?.items?.flatMap((col) => col?.tickets?.items) as Ticket[]
  );

  console.log('Columns:', columns);
  console.log('Tickets:', tickets);

  // https://github.com/atlassian/react-beautiful-dnd/issues/1756
  resetServerContext();

  const classes = useStyles();
  console.log('Board:', board);

  const onDragEnd = (result: DropResult): void => {
    const { source, destination } = result;
    console.log('Dragged from:', source, 'to:', destination);

    // Didn't move it to a valid destination - cancel
    if (!destination || !destination.droppableId) {
      return;
    }

    // Move a ticket's places within the same column
    if (source.droppableId === destination?.droppableId) {
      console.log('Move a tickets place within the same column');

      // In hindsight this is a really weird way to do it...
      // but messing around with react-beatiful-dnd wasn't the point of making this
      // so enjoy some funky JS :-)
      const filtered = Array.from(
        tickets.filter((t) => t.columnId === source.droppableId)
      );
      const others = Array.from(
        tickets.filter((t) => t.columnId != source.droppableId)
      );
      const [removed] = filtered.splice(source.index, 1);
      filtered.splice(destination.index, 0, removed);
      setTickets([...filtered, ...others]);
    }

    // Move a ticket from one column to another column
    if (source.droppableId != destination?.droppableId) {
      console.log('Move a ticket from one column to another column');

      // All the tickets that were in the source column
      const filtered = Array.from(
        tickets.filter((t) => t.columnId === source.droppableId)
      );
      const others = Array.from(
        tickets.filter((t) => t.columnId != source.droppableId)
      );

      console.log('filtered:', filtered, 'others:', others);
      // ticketMoved = The ticket that got moved.
      // Remove it from the source column with splice
      const [ticketMoved] = filtered.splice(source.index, 1);

      // Update the column id of the
      ticketMoved.columnId = destination.droppableId;

      // Place the modified ticket into the temp state's new column
      others.splice(destination.index, 0, ticketMoved);

      setTickets([...filtered, ...others]);
    }

    // TODO: Move a column
    else {
      console.log('No criteria met');
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
              <ColumnComponent
                column={column}
                tickets={tickets.filter((t) => t.columnId === column.id)}
                key={column?.id}
              />
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

  console.log(response);

  return {
    props: {
      board: response.data.getBoard,
    },
  };
};
