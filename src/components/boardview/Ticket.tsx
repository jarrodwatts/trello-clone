import React, { ReactElement, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonBase, Grid, Paper, Typography } from '@material-ui/core';
import { Board, Column, Ticket } from '../../API';
import { Draggable } from 'react-beautiful-dnd';
import CreateIcon from '@material-ui/icons/Create';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import EditTicketPopup from './EditTicketPopup';

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
  descriptionIcon: {
    maxHeight: '16px',
    maxWidth: '16px',
    color: '#5e6c84',
    margin: '4px',
  },
}));

interface Props {
  ticket: Ticket;
  keyProp: number;
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board | null>>;
  column: Column;
}

export default function TicketComponent({
  ticket,
  keyProp,
  board,
  setBoard,
  column,
}: Props): ReactElement {
  const classes = useStyles();

  const [openEdit, setOpenEdit] = useState(false);

  const handleClose = () => {
    setOpenEdit(false);
  };

  const handleClickOpen = () => {
    setOpenEdit(true);
  };

  return (
    <React.Fragment>
      <EditTicketPopup
        ticket={ticket}
        open={openEdit}
        board={board}
        setBoard={setBoard}
        handleClose={handleClose}
      />
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
                <Grid
                  container
                  direction='row'
                  alignItems='center'
                  justify='space-between'
                >
                  <Grid item>
                    <Typography className={classes.ticketName} variant='body1'>
                      {ticket.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ButtonBase
                      onClick={handleClickOpen}
                      style={{ padding: '4px' }}
                    >
                      <CreateIcon
                        style={{ maxHeight: '16px', maxWidth: '16px' }}
                      />
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Grid>
              {ticket.description && (
                <ViewHeadlineIcon className={classes.descriptionIcon} />
              )}
            </Paper>
          </div>
        )}
      </Draggable>
    </React.Fragment>
  );
}
