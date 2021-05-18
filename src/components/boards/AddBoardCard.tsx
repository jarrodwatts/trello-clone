import { Theme, Typography, ButtonBase } from '@material-ui/core';
import React, { useState, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateNewBoardPopup from './CreateNewBoardPopup';
import { CreateBoardInput, CreateBoardMutation, Workspace } from '../../API';
import { createBoard } from '../../graphql/mutations';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { useRouter } from 'next/router';
import getRandomImage from '../../lib/getRandomImage';

const useStyles = makeStyles((theme: Theme) => ({
  cardText: {
    color: '#172b4d',
    fontWeight: 400,
    fontSize: 16,
  },
  container: {
    position: 'relative',
    backgroundColor: '#091E420A',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    minHeight: '96px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
}));

interface Props {
  workspace: Workspace;
}

export default function AddBoardCard({ workspace }: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [boardName, setBoardName] = useState<string>('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setBoardName(value);
  };

  const handleSubmit = () => {
    setOpen(false);
    console.log('Submitted board name: ', boardName);

    triggerCreateBoard();
  };

  async function triggerCreateBoard() {
    const createBoardInput: CreateBoardInput = {
      // @ts-ignore
      workspaceId: workspace.id,
      name: boardName,
      image: getRandomImage(),
      columns: [],
    };

    console.log(createBoardInput);

    const test = (await API.graphql({
      query: createBoard,
      variables: { input: createBoardInput },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: CreateBoardMutation; errors: any[] };

    router.push(`/board/${test.data.createBoard?.id}`);
  }

  return (
    <React.Fragment>
      <ButtonBase className={classes.container} onClick={handleClickOpen}>
        <div className={classes.container}>
          <Typography variant='h6' className={classes.cardText}>
            Create new board
          </Typography>
        </div>
      </ButtonBase>

      <CreateNewBoardPopup
        boardName={boardName}
        setBoardName={setBoardName}
        open={open}
        onClose={handleClose}
        handleSubmit={handleSubmit}
        workspace={workspace}
      />
    </React.Fragment>
  );
}
