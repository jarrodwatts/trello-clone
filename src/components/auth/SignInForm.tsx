import React, { ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    width: '100%',
    paddingLeft: '24px',
    paddingRight: '24px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#5AAC44',
    color: '#fff',
    fontWeight: 700,
  },
  field: {
    background: '#FAFBFC',
    color: theme.palette.text.hint,
  },
}));

interface Props {}

export default function SignIn({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <form className={classes.form}>
        <TextField
          className={classes.field}
          variant='outlined'
          margin='dense'
          required
          fullWidth
          id='email'
          label='Enter email'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField
          className={classes.field}
          variant='outlined'
          margin='dense'
          required
          fullWidth
          name='password'
          label='Enter Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          className={classes.submit}
        >
          Log in
        </Button>

        <Typography color='textSecondary'>OR</Typography>

        <Grid
          container
          direction='column'
          alignItems='center'
          justify='center'
          spacing={1}
          style={{ marginTop: '8px' }}
        >
          <Grid item style={{ width: '100%' }}>
            <Button style={{ width: '100%' }} variant='outlined'>
              Continue with Google
            </Button>
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <Button
              color='default'
              style={{ width: '100%' }}
              variant='outlined'
            >
              Continue with Facebook
            </Button>
          </Grid>
          <Divider style={{ width: '90%', marginTop: '32px' }} />

          <Link href='/signup'>
            <a
              style={{
                marginTop: '8px',
                textDecoration: 'none',
                color: '#0052CC',
              }}
            >
              Sign up for an account
            </a>
          </Link>
        </Grid>
      </form>
    </div>
  );
}
