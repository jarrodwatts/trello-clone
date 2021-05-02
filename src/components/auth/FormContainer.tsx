import { Grid, Avatar, Typography, Paper } from '@material-ui/core';
import React, { ReactElement } from 'react';
import theme from '../../theme';
import useStyles from '../../hooks/useStyles';

interface Props {
  form: React.ReactElement;
  type: string;
}

const determineTextToShow = (t: string): string => {
  switch (t) {
    case 'signup':
      return 'Sign up for your account';
    case 'verify':
      return 'Verify your email address';
    case 'signin':
      return 'Log in to Craplo';
    default:
      return '';
  }
};

export default function FormContainer({ form, type }: Props): ReactElement {
  const classes = useStyles();
  const formText = determineTextToShow(type);
  return (
    <React.Fragment>
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='center'
        style={{ marginTop: '32px', marginBottom: '32px' }}
        spacing={2}
      >
        <Grid item>
          <Avatar src={`/logo.png`}></Avatar>
        </Grid>
        <Grid item>
          <Typography variant='h4' style={{ fontWeight: 700 }}>
            Craplo
          </Typography>
        </Grid>
      </Grid>
      <Paper
        className={classes.paper}
        elevation={3}
        style={{ minHeight: '460px' }}
      >
        <Typography
          variant='subtitle2'
          component='h1'
          style={{
            marginTop: '16px',
            color: theme.palette.text.secondary,
            fontSize: '16px',
          }}
        >
          {formText}
        </Typography>

        {/* This is the actual form component (either sign up or sign in) */}
        {form}
      </Paper>
    </React.Fragment>
  );
}
