import {
  Avatar,
  Container,
  Grid,
  Paper,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignInForm from '../components/auth/SignInForm';
import theme from '../theme';

interface Props {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Login({}: Props): ReactElement {
  const classes = useStyles();

  return (
    <div style={{ background: '#f9fafc' }}>
      <Container maxWidth='xs'>
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
              El Craplo
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
            Log in to El Craplo
          </Typography>

          {/* Form */}
          <SignInForm />
        </Paper>
      </Container>
    </div>
  );
}
