import React, { useState, ReactElement } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Theme, Typography } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';
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

interface VerifyInput {
  email: string;
  code: string;
}

export default function VerifyForm({
  passedThroughEmail,
  passedThroughPassword,
}: {
  passedThroughEmail?: string;
  passedThroughPassword?: string;
}): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const [resent, setResent] = useState<boolean>(false);
  const [email, setEmail] = useState<string | undefined>(passedThroughEmail);
  const { control, register, handleSubmit } = useForm<VerifyInput>();
  const [showSnackbarFailure, setShowSnackbar] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (data: VerifyInput) => {
    try {
      await tryVerify(data);

      if (passedThroughPassword) {
        try {
          await Auth.signIn(data.email, passedThroughPassword);
        } catch (error) {
          setErrorMessage(error.message);
          setShowSnackbar(true);
        }
      }
      // if sign up success...
      router.push(`/login`);
    } catch (error) {
      setErrorMessage(error.message);
      setShowSnackbar(true);
    }
  };

  const tryVerify = async (data: VerifyInput): Promise<void> => {
    try {
      if (email) {
        await Auth.confirmSignUp(email, data.code);
      }
    } catch (error) {
      console.error('error verifying:', error);
    }
  };

  const resendVerification = async () => {
    if (email) {
      try {
        await Auth.resendSignUp(email);
        setResent(true);
      } catch (err) {
        console.error('error resending code: ', err);
      }
    }
  };

  return (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...register('email')}
              className={classes.field}
              defaultValue={email}
              variant='outlined'
              margin='dense'
              required
              fullWidth
              id='email'
              label='Enter email'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
        />
        <Controller
          name='code'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...register('code')}
              className={classes.field}
              variant='outlined'
              margin='dense'
              required
              fullWidth
              name='code'
              label='Enter Confirmation Code'
              type='text'
              id='code'
            />
          )}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          className={classes.submit}
        >
          Confirm
        </Button>

        <Divider style={{ width: '90%', marginTop: '32px' }} />

        {/* Re-send  */}
        {!resent ? (
          <Button
            color='default'
            variant='text'
            onClick={() => resendVerification()}
          >
            Didn&apos;t recieve an email? Resend
          </Button>
        ) : (
          <Typography>Email Resent!</Typography>
        )}
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
