import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';
import { Ticket } from '../../API';
import { Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme: Theme) => ({
  ticket: {
    width: '100%',
    minHeight: '60px',
    padding: '4px',
    marginBottom: '8px',
  },
  name: {
    fontSize: 12,
    fontWeight: 600,
  },
}));

interface Props {
  ticket: Ticket | null;
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
      draggableId={keyProp.toString()}
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
            <Button>test</Button>
            <Typography variant='body1'>{ticket?.title}</Typography>
          </Paper>
        </div>
      )}
    </Draggable>
  );
}
