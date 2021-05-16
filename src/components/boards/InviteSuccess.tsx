import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import React, { ReactElement } from 'react';

interface Props {
  memberName: string;
}

export default function InviteSuccess({ memberName }: Props): ReactElement {
  return (
    <Snackbar open={true} autoHideDuration={4000}>
      <Alert severity='success'>Added {memberName}!</Alert>
    </Snackbar>
  );
}
