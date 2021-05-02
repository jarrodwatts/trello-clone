import React, { useState, ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import VerifyForm from './VerifyForm';

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
    background: '#0052CC',
    color: '#fff',
    fontWeight: 700,
  },
  field: {
    background: '#FAFBFC',
    color: theme.palette.text.hint,
  },
}));

interface SignUpInput {
  email: string;
  name: string;
  password: string;
}

export default function SignUpForm(): ReactElement {
  const classes = useStyles();
  const [phase, setPhase] = useState<string>('2');
  const [userEmail, setUserEmail] = useState<string>('');
  const { control, register, handleSubmit } = useForm<SignUpInput>();

  const onSubmit = async (data: SignUpInput) => {
    const signUpAttempt = await trySignUp(data);
    setUserEmail(data.email);
    console.log(signUpAttempt);
    setPhase('2'); // move to verify screen
  };

  const trySignUp = async (data: SignUpInput): Promise<CognitoUser | null> => {
    try {
      const { user } = await Auth.signUp({
        username: data.email,
        password: data.password,
      });
      return user;
    } catch (error) {
      console.error('error signing up:', error);
      return null;
    }
  };

  if (phase === '1') {
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
                label='Enter email address'
                name='email'
                autoComplete='email'
                autoFocus
              />
            )}
          />
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...register('name')}
                className={classes.field}
                variant='outlined'
                margin='dense'
                required
                fullWidth
                id='name'
                label='Enter full name'
                name='name'
                autoComplete='name'
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
                label='Create password'
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
            Sign up
          </Button>

          <Typography color='textSecondary'>OR</Typography>

          {/* Social Sign Ups */}
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
                Sign Up with Google
              </Button>
            </Grid>
            <Grid item style={{ width: '100%' }}>
              <Button
                color='default'
                style={{ width: '100%' }}
                variant='outlined'
              >
                Sign Up with Facebook
              </Button>
            </Grid>
            <Divider style={{ width: '90%', marginTop: '32px' }} />

            {/* Sign up for an account */}
            <Link href='/login'>
              <a
                style={{
                  marginTop: '8px',
                  textDecoration: 'none',
                  color: '#0052CC',
                }}
              >
                Already have an account? Log In
              </a>
            </Link>
          </Grid>
        </form>
      </div>
    );
  }
  if (phase === '2') {
    return <VerifyForm passedThroughEmail={userEmail} />;
  } else {
    return <div>Something went wrong :(</div>;
  }
}
