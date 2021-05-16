import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CreateWorkspaceForm from './CreateWorkspaceForm';
import { DialogContent } from '@material-ui/core';
import { Workspace } from '../../API';

interface Props {
  open: boolean;
  workspaces: Workspace[];
  setWorkspaces: React.Dispatch<React.SetStateAction<Workspace[]>>;
  handleClose: () => void;
}

export default function CreateWorkspacePopup({
  open,
  workspaces,
  setWorkspaces,
  handleClose,
}: Props) {
  return (
    <div>
      <Dialog
        open={open}
        maxWidth={'lg'}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogContent style={{ overflow: 'hidden' }}>
          <CreateWorkspaceForm
            workspaces={workspaces}
            setWorkspaces={setWorkspaces}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
