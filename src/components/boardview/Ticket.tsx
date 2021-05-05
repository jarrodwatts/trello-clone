import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { Ticket } from '../../API';
import { Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme: Theme) => ({
  ticket: {
    width: '100%',
    minHeight: '60px',
    padding: '4px',
    marginBottom: '8px',
  },
  ticketName: {
    paddingLeft: '4px',
  },
}));

interface Props {
  ticket: Ticket;
  keyProp: number;
}

export default function TicketComponent({
  ticket,
  keyProp,
}: Props): ReactElement {
  const classes = useStyles();
  return (
    <Draggable
      key={ticket?.id}
      // @ts-ignore : Again, ticket id cannot be null idk why it is saying this.
      draggableId={ticket?.id}
      index={keyProp}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          //  style={getItemStyle(
          //      provided.draggableStyle,
          //      snapshot.isDragging
          //  )}
          {...provided.dragHandleProps}
        >
          <Paper className={classes.ticket} elevation={1}>
            <Typography className={classes.ticketName} variant='body1'>
              {ticket.title}
            </Typography>
          </Paper>
        </div>
      )}
    </Draggable>
  );
}
