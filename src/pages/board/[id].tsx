import React, { ReactElement, useState } from 'react';
import { API } from 'aws-amplify';
import { getBoard } from '../../graphql/queries';
import {
  Board,
  Column,
  ColumnInput,
  GetBoardQuery,
  GetBoardQueryVariables,
  Ticket,
  TicketInput,
  UpdateBoardInput,
  UpdateBoardMutation,
} from '../../API';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import UserHeader from '../../components/Headers/UserHeader';
import Image from 'next/image';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ColumnComponent from '../../components/boardview/Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import AddColumn from '../../components/boardview/AddColumn';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { updateBoard } from '../../graphql/mutations';

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

/**
 * This file is so messy - I should clean it up bu
 * @return {ReactElement}
 */
export default function IndividualBoardPage(): ReactElement {
  const router = useRouter();
  const classes = useStyles();
  const { id } = router.query;
  // https://github.com/atlassian/react-beautiful-dnd/issues/1756
  resetServerContext();

  const [board, setBoard] = useState<Board>();

  useEffect(() => {
    fetchBoardData();
  }, []);

  // Fetch data for the board client-side
  const fetchBoardData = async (): Promise<Board> => {
    const input: GetBoardQueryVariables = {
      id: id as string,
    };

    const response = (await API.graphql({
      query: getBoard,
      variables: input,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: GetBoardQuery; errors: any[] };

    setBoard(response.data.getBoard as Board);
    return response.data.getBoard as Board;
  };
  if (board) {
    const onDragEnd = async (result: DropResult): Promise<void> => {
      const { source, destination } = result;

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
        const destinationColumn = board?.columns?.find(
          (c) => c.id === destination.droppableId
        );

        // Should always find it
        if (destinationColumn && destinationColumn.tickets) {
          // Make the change in state:
          const tickets = Array.from([...destinationColumn.tickets]);
          const [removed] = tickets.splice(source.index, 1);
          tickets.splice(destination.index, 0, removed);

          const newBoard = {
            ...board,
            columns: board?.columns?.map((c) => {
              return c.id === destination.droppableId
                ? { ...c, tickets: tickets }
                : { ...c };
            }),
          };

          setBoard(newBoard);

          (await API.graphql({
            query: updateBoard,
            variables: { input: newBoard },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          })) as UpdateBoardMutation;
        }
      }

      // Path 2: Moving from one column to another column
      if (source.droppableId != destination.droppableId) {
        // Get the relevant columns
        const sourceColumn = board.columns?.find(
          (c) => c.id === source.droppableId
        );
        const destinationColumn = board.columns?.find(
          (c) => c.id === destination.droppableId
        );

        const sourceTickets = Array.from(
          sourceColumn?.tickets ? [...sourceColumn?.tickets] : []
        );
        const destinationTickets = Array.from(
          destinationColumn?.tickets ? [...destinationColumn?.tickets] : []
        );

        // Remove it from source
        const [removed] = sourceTickets.splice(source.index, 1);
        // Add it to destination
        destinationTickets.splice(destination.index, 0, removed);

        const newSourceColumn = {
          ...sourceColumn,
          tickets: [...(sourceTickets as Ticket[])],
        };

        const newDestinationColumn = {
          ...destinationColumn,
          tickets: [...(destinationTickets as Ticket[])],
        };

        const newBoard = {
          ...board,
          columns: board.columns?.map((c) => {
            if (c.id === source.droppableId) {
              return newSourceColumn as Column;
            }
            if (c.id === destination.droppableId) {
              return newDestinationColumn as Column;
            }
            return c;
          }),
        };

        setBoard(newBoard);

        (await API.graphql({
          query: updateBoard,
          variables: { input: newBoard },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as UpdateBoardMutation;
      }
    };

    return (
      <React.Fragment>
        <div className={classes.backgroundImage}>
          <Image
            alt={board?.name}
            src={`/boards/${board?.image}.jpg`}
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </div>
        <UserHeader st={'grey'} />
        <div style={{ padding: '16px' }}>
          <Typography variant='h5' className={classes.title}>
            {board?.name}
          </Typography>

          <DragDropContext onDragEnd={onDragEnd}>
            <Grid
              container
              direction='row'
              alignItems='flex-start'
              justify='flex-start'
              wrap='nowrap'
              spacing={1}
            >
              {board.columns?.map((column) => (
                <ColumnComponent
                  column={column}
                  setBoard={setBoard}
                  allColumns={board.columns}
                  key={column?.id}
                />
              ))}
              <AddColumn
                allColumns={board.columns}
                setBoard={setBoard}
                // @ts-ignore
                boardId={board.id}
              />
            </Grid>
          </DragDropContext>
        </div>
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
}

// Unfortunately, server-side rendering for "email" as the ownerField is also bugged at the moment.
// Email isn't exposed in SSR so it can't detect a user to make an authenticated request - sad :(
// View the content of _app.js for the link to the GitHub

/** 
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
*/
