import React, { ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import {
  Board,
  Column,
  ColumnInput,
  UpdateBoardInput,
  UpdateBoardMutation,
} from '../../API';
import AddIcon from '@material-ui/icons/Add';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { updateBoard } from '../../graphql/mutations';

const useStyles = makeStyles((theme: Theme) => ({
  addIconSmall: {
    maxHeight: '16px',
    maxWidth: '16px',
    color: '#5e6c84',
    marginRight: '4px',
  },
  addText: {
    color: '#5e6c84',
    fontSize: '14px',
  },
  addButton: {
    marginLeft: '8px',
    paddingTop: '8px',
    paddingBottom: '8px',
    minWidth: '272px',
    maxWidth: '272px',
    color: '#172b4d',
    backgroundColor: '#00000014',
    padding: '8px',
    borderRadius: 4,

    '&:hover': {
      backgroundColor: '#00000025',
    },
  },
}));

interface Props {
  setBoard: React.Dispatch<React.SetStateAction<Board | null>>;
  board: Board;
}

export default function AddColumn({ setBoard, board }: Props): ReactElement {
  const classes = useStyles();

  const addList = async () => {
    const newColumn: ColumnInput = {
      id: uuidv4(),
      // @ts-ignore id won't be null...
      boardId: board.id,
      name: ' ',
      tickets: [],
      columnIndex: board.columns ? board.columns.length : 0,
    };

    const newBoard = {
      ...board,
      columns: board.columns
        ? ([...board.columns, newColumn as Column] as Column[])
        : ([newColumn as Column] as Column[]),
    };

    setBoard(newBoard);

    const input: UpdateBoardInput = {
      // @ts-ignore never will be null
      id: board.id,
      columns: newBoard.columns as ColumnInput[],
    };

    (await API.graphql({
      query: updateBoard,
      variables: { input: input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: UpdateBoardMutation; errors: any[] };
  };

  return (
    <ButtonBase onClick={addList} className={classes.addButton}>
      <Grid container direction='row' alignItems='center'>
        <Grid item>
          <AddIcon className={classes.addIconSmall} color='inherit' />
        </Grid>
        <Grid item>
          <Typography className={classes.addText}>Add another list</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
}
