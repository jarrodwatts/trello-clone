import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, Grid, TextField, Typography } from '@material-ui/core';
import {
  Board,
  ColumnInput,
  Ticket,
  UpdateBoardInput,
  UpdateBoardMutation,
} from '../../API';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { updateBoard } from '../../graphql/mutations';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
  ticketTitle: {
    fontWeight: 600,
    fontSize: 20,
    color: '#172b4d',
  },
  inList: {
    color: '#5e6c84',
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 400,
  },
  desc: {
    width: 'auto',
    minHeight: '18px',
    minWidth: '40px',
    fontWeight: 600,
    color: '#172b4d',
  },
  field: {
    // background: 'rgba(9,30,66,.01)',
    color: '#172b4d',
    minHeight: '40px',
    borderRadius: 3,
    boxShadow: 'none',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
  },
}));

interface Props {
  ticket: Ticket;
  open: boolean;
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board | null>>;
  handleClose: () => void;
}

export default function EditTicketPopup({
  ticket,
  open,
  board,
  setBoard,
  handleClose,
}: Props) {
  const classes = useStyles();
  const [title, setTitle] = useState<string>(ticket.title ? ticket.title : ' ');
  const [description, setDescription] = useState<string>(
    ticket.description ? ticket.description : ''
  );

  const handleCloseWithSave = async () => {
    handleClose();
    console.log('Closed:', title);
    await updateTicket();
  };

  const updateTicket = async () => {
    const newBoard = {
      ...board,
      columns: board?.columns?.map((c) => {
        return c.id === ticket.columnId
          ? {
              ...c,
              tickets: c.tickets?.map((t) => {
                return t.id === ticket.id
                  ? { ...t, title: title, description: description }
                  : { ...t };
              }),
            }
          : { ...c };
      }),
    };

    setBoard(newBoard as Board);

    const input: UpdateBoardInput = {
      // @ts-ignore :-)
      id: board.id,
      columns: newBoard.columns as ColumnInput[],
    };

    try {
      (await API.graphql({
        query: updateBoard,
        variables: { input: input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as UpdateBoardMutation;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={open}
      maxWidth={'xs'}
      fullWidth={true}
      onClose={handleCloseWithSave}
      aria-labelledby='form-dialog-title'
      disableBackdropClick={false}
      onEscapeKeyDown={handleClose}
    >
      <DialogContent style={{ overflow: 'hidden' }}>
        <Grid container direction='row' spacing={2}>
          <Grid item>
            <DashboardIcon style={{ marginTop: '4px' }} />
          </Grid>
          <Grid item style={{ width: '90%' }}>
            <TextField
              variant='outlined'
              margin='dense'
              fullWidth
              id='title'
              name='title'
              defaultValue={ticket.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Typography className={classes.inList}>
              in list{' '}
              <u>
                {board.columns?.find((c) => c.id === ticket.columnId)
                  ? board.columns?.find((c) => c.id === ticket.columnId)?.name
                  : 'Error'}
              </u>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction='row'
          spacing={2}
          style={{ marginTop: '16px' }}
        >
          <Grid item>
            <ViewHeadlineIcon style={{ marginTop: '4px' }} />
          </Grid>
          <Grid item style={{ width: '90%' }}>
            <Typography className={classes.desc}>Description</Typography>
            <TextField
              className={classes.field}
              multiline
              rows={3}
              variant='filled'
              margin='dense'
              fullWidth
              id='description'
              label='Add a more detailed description...'
              value={description}
              name='description'
              inputProps={{ autoComplete: 'off' }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
