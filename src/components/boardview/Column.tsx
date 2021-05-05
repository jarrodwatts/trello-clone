import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Column, Ticket } from '../../API';
import TicketComponent from './Ticket';
import { Droppable } from 'react-beautiful-dnd';

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
  tickets: Ticket[];
}

export default function ColumnComponent({
  column,
  tickets,
}: Props): ReactElement {
  const classes = useStyles();

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
            {tickets.map((ticket: Ticket, key) => (
              <TicketComponent key={ticket?.id} ticket={ticket} keyProp={key} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Grid>
  );
}
