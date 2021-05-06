import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import {
  Column,
  Ticket,
  TicketInput,
  UpdateColumnMutation,
  UpdateColumnMutationVariables,
} from '../../API';
import TicketComponent from './Ticket';
import { Droppable } from 'react-beautiful-dnd';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { v4 as uuidv4 } from 'uuid';
import { updateColumn } from '../../graphql/mutations';

const useStyles = makeStyles((theme: Theme) => ({
  column: {
    minWidth: '272px',
    maxWidth: '272px',
    minHeight: '78px',
    color: '#172b4d',
    backgroundColor: '#ebecf0',
    padding: '8px',
    borderRadius: 4,
    marginLeft: '8px',
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: '4px',
    marginLeft: '16px',
  },
}));

interface Props {
  column: Column;
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
  allColumns: Column[];
}

export default function ColumnComponent({
  column,
  setColumns,
  allColumns,
}: Props): ReactElement {
  const classes = useStyles();

  const addTicketToColumn = async () => {
    const newTicket: TicketInput = {
      id: uuidv4(),
      title: '',
      // @ts-ignore column shouldn't be undefined ever
      columnId: column.id,
    };

    let updatedTickets: Ticket[];
    if (column.tickets) {
      updatedTickets = [...column.tickets, newTicket as Ticket];
    } else {
      updatedTickets = [newTicket as Ticket];
    }
    // setColumn({
    //   ...stateColumn,
    //   tickets: updatedTickets,
    // });

    const updatedColumns = allColumns.map((c) => {
      if (c.id === column.id) {
        return { ...c, tickets: updatedTickets };
      }
      return c;
    });

    setColumns(updatedColumns);

    // update by pushing the whole of the column to the update mutation
    const input: UpdateColumnMutationVariables = {
      input: {
        // @ts-ignore shouldn't be undefined ever
        id: column.id,
        tickets: updatedTickets as TicketInput[],
      },
    };

    console.log('Trying to update from Column');
    try {
      const updated = (await API.graphql({
        query: updateColumn,
        variables: input,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as UpdateColumnMutation;
      console.log('Finished updating without error:', updated);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container direction='column' className={classes.column}>
      <Typography className={classes.name}>{column?.name}</Typography>
      {/* @ts-ignore: Why does Amplify think column.id can be null...? It can't. In the schema it MUST be there.*/}
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            // style={getListStyle(snapshot.isDraggingOver)}
          >
            {column?.tickets?.map((ticket, key) => (
              <TicketComponent key={ticket?.id} ticket={ticket} keyProp={key} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Button to add a ticket */}
      <Button onClick={addTicketToColumn} variant='text'>
        Add One brah
      </Button>
    </Grid>
  );
}
