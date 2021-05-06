import React, { useState, useEffect, ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import {
  Column,
  OnUpdateColumnSubscription,
  Ticket,
  TicketInput,
  UpdateColumnInput,
  UpdateColumnMutation,
  UpdateColumnMutationVariables,
} from '../../API';
import TicketComponent from './Ticket';
import { Droppable } from 'react-beautiful-dnd';
import { onUpdateColumn } from '../../graphql/subscriptions';
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
}

export default function ColumnComponent({ column }: Props): ReactElement {
  const classes = useStyles();
  const [stateColumn, setColumn] = useState<Column>(column);

  useEffect(() => {
    const onUpdateListener = API.graphql({
      query: onUpdateColumn,
      variables: {
        owner: stateColumn.owner,
        editors: stateColumn.editors,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    // @ts-ignore : property subscribe doesn't exist for whatever reason in typescript
    onUpdateListener.subscribe(
      ({
        value,
      }: {
        value: {
          data: OnUpdateColumnSubscription;
          errors: any[];
        };
      }) => {
        const { data, errors } = value;
        if (errors) {
          console.error([...errors]);
        }

        // Update the column if the mutation detected is this column.
        // (since there will be multiple of this component - one per column)
        if (stateColumn.id === data?.onUpdateColumn?.id) {
          console.log(
            'Event coming in from subscription:',
            data.onUpdateColumn
          );
          setColumn(data.onUpdateColumn as Column);
        }
      }
    );
  }, []);

  const addTicketToColumn = async () => {
    const newTicket: TicketInput = {
      id: uuidv4(),
      title: '',
      // @ts-ignore column shouldn't be undefined ever
      columnId: stateColumn.id,
    };

    let updatedTickets: Ticket[];
    if (stateColumn.tickets) {
      updatedTickets = [...stateColumn.tickets, newTicket as Ticket];
    } else {
      updatedTickets = [newTicket as Ticket];
    }
    setColumn({
      ...stateColumn,
      tickets: updatedTickets,
    });

    console.log('Updated tickets  as input:', stateColumn.tickets);
    console.log('Column is now:', stateColumn);

    // update by pushing the whole of the column to the update mutation
    const input: UpdateColumnMutationVariables = {
      input: {
        // @ts-ignore shouldn't be undefined ever
        id: stateColumn.id,
        boardId: stateColumn.boardId,
        name: stateColumn.name,
        tickets: updatedTickets as TicketInput[],
        columnIndex: stateColumn.columnIndex,
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

  console.log('Columns updated:', stateColumn);

  return (
    <Grid container direction='column' className={classes.column}>
      <Typography className={classes.name}>{stateColumn?.name}</Typography>
      {/* @ts-ignore: Why does Amplify think column.id can be null...? It can't. In the schema it MUST be there.*/}
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            // style={getListStyle(snapshot.isDraggingOver)}
          >
            {stateColumn?.tickets?.map((ticket, key) => (
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
