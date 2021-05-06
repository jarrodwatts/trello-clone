import React, { useState, useEffect, ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import {
  Column,
  OnUpdateColumnSubscription,
  OnUpdateColumnSubscriptionVariables,
  Ticket,
} from '../../API';
import TicketComponent from './Ticket';
import { Droppable } from 'react-beautiful-dnd';
import { onUpdateColumn } from '../../graphql/subscriptions';
import Amplify, { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

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

/*
With TS we create an Observable type to describe the return type of a GraphQL subscription.
Hopefully in future releases of aws-amplify we will have generic types for API.graphql that will make this un-necessary.
*/
type Observable<Value = unknown, Error = {}> = {
  subscribe: (
    cb?: (v: Value) => void,
    errorCb?: (e: Error) => void,
    completeCallback?: () => void
  ) => void;
  unsubscribe: Function;
};

type Listener<T> = Observable<{ value: { data: T } }>;

export default function ColumnComponent({ column }: Props): ReactElement {
  const classes = useStyles();

  useEffect(() => {
    blah();

    const onUpdateListener: Listener<OnUpdateColumnSubscription> = API.graphql({
      query: onUpdateColumn,
      variables: {
        owner: column.owner,
        editors: column.editors,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    const onUpdateSubscription = onUpdateListener.subscribe((v) => {
      console.log(v);
    });

    console.log('On Update Sub: ', onUpdateSubscription);
  }, []);

  async function blah() {
    const input: OnUpdateColumnSubscriptionVariables = {
      owner: column.owner,
      editors: column.editors,
    };

    const listener: Observable<{
      value: { data: OnUpdateColumnSubscription };
    }> = (await API.graphql({
      query: onUpdateColumn,
      variables: input,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: OnUpdateColumnSubscription };

    const subscription = listener.subscribe((v) => {
      console.log('v', v);
    });

    console.log('Listner:', listener);
    console.log('Subscription:', subscription);
  }

  const [tickets, setTickets] = useState<Ticket[]>(
    column.tickets ? column.tickets : []
  );

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
    </Grid>
  );
}
