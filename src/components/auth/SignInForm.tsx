import React, { ReactElement, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Theme, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { useRouter } from 'next/router';
import AuthFailure from './AuthFailure';

const useStyles = makeStyles((theme: Theme) => ({
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

interface SignInInput {
  email: string;
  password: string;
}

export default function SignInForm(): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const { control, register, handleSubmit } = useForm<SignInInput>();
  const [showSnackbarFailure, setShowSnackbar] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (data: SignInInput) => {
    const attempt = await trySignIn(data);
    if (attempt) {
      router.push(`/boards`);
    } else {
      console.log('Show snack');
      setShowSnackbar(true);
    }
  };

  const trySignIn = async (data: SignInInput) => {
    try {
      const user = await Auth.signIn(data.email, data.password);
      return user;
    } catch (error) {
      console.error('error signing up:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {/* Email and Password */}
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...register('email')}
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
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...register('password')}
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
          )}
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

        {/* Social Logins */}
        <Grid
          container
          direction='column'
          alignItems='center'
          justify='center'
          spacing={1}
          style={{ marginTop: '8px' }}
        >
          <Grid item style={{ width: '100%' }}>
            <Button
              style={{ width: '100%' }}
              variant='outlined'
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google,
                })
              }
            >
              Continue with Google
            </Button>
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <Button
              color='default'
              style={{ width: '100%' }}
              variant='outlined'
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Facebook,
                })
              }
            >
              Continue with Facebook
            </Button>
          </Grid>
          <Divider style={{ width: '90%', marginTop: '32px' }} />

          {/* Sign up for an account */}
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
      {/* Show Snack Bar when auth error */}
      <AuthFailure
        errorMessage={errorMessage}
        open={showSnackbarFailure}
        toggleOpen={setShowSnackbar}
      />
    </div>
  );
}
