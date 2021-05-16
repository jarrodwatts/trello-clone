import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Ticket } from '../../API';
import { Draggable } from 'react-beautiful-dnd';
import CreateIcon from '@material-ui/icons/Create';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

const useStyles = makeStyles((theme: Theme) => ({
  ticket: {
    width: '100%',
    minHeight: '60px',
    padding: '4px',
    marginBottom: '8px',
    '&:hover': {
      background: '#f4f5f7',
    },
  },
  ticketName: {
    paddingLeft: '4px',
    color: '#172b4d',
    overflow: 'hidden',
    wordWrap: 'break-word',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
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
      onClick={() => console.log('clicked ', ticket.id)}
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
            <Grid container direction='column'>
              <Grid container direction='row' alignItems='center'>
                <Grid item>
                  <Typography className={classes.ticketName} variant='body1'>
                    {ticket.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button onClick={() => console.log('edit:', ticket.id)}>
                    <CreateIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {ticket.description && (
              <Button
                onClick={() => console.log('open:', ticket.id, 'description')}
              >
                <ViewHeadlineIcon />
              </Button>
            )}
          </Paper>
        </div>
      )}
    </Draggable>
  );
}
