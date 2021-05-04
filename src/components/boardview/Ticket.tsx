import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Ticket } from '../../API';

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
}

export default function TicketComponent({ ticket }: Props): ReactElement {
  const classes = useStyles();
  return (
    <Grid container direction='column'>
      <Paper className={classes.ticket} elevation={1}>
        <Typography variant='body1'>{ticket?.title}</Typography>
      </Paper>
    </Grid>
  );
}
