import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Workspace } from '../../API';

interface Props {
  open: boolean;
  boardName: string;
  setBoardName: React.Dispatch<React.SetStateAction<string>>;
  onClose: (value: string) => void;
  handleSubmit: any;
  workspace: Workspace;
}

export default function CreateNewBoardPopup({
  open,
  boardName,
  setBoardName,
  onClose,
  handleSubmit,
  workspace,
}: Props) {
  const handleClose = () => {
    onClose(boardName);
  };

  return (
    <div>
      <Dialog
        open={open}
        maxWidth={'xs'}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          Create board for <strong>{workspace.name}</strong>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='boardName'
            label='Add Board Title'
            type='text'
            onChange={(e) => setBoardName(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <Button onClick={handleSubmit} variant='contained' color='secondary'>
          Create Board
        </Button>
      </Dialog>
    </div>
  );
}
