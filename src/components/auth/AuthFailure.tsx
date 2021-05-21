import React, { ReactElement } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

interface Props {
  errorMessage: string;
  open: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AuthFailure({
  errorMessage,
  open,
  toggleOpen,
}: Props): ReactElement {
  const classes = useStyles();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    toggleOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          Something went wrong: {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
