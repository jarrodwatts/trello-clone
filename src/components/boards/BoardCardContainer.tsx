import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Board, Workspace } from '../../API';
import BoardCard from './BoardCard';
import useStyles from '../../hooks/useStyles';
import AddBoardCard from './AddBoardCard';

interface Props {
  boards: Board[];
  workspace: Workspace;
}

export default function BoardCardContainer({
  boards,
  workspace,
}: Props): ReactElement {
  const classes = useStyles();

  console.log(workspace);
  return (
    <Grid container style={{ marginTop: '4px' }} spacing={2}>
      {boards?.map((board) => (
        <Grid
          item
          key={board.id}
          xs={6}
          md={3}
          className={classes.boardImageRounding}
        >
          <BoardCard board={board} />
        </Grid>
      ))}

      <Grid item xs={6} md={3} className={classes.boardImageRounding}>
        <AddBoardCard workspace={workspace} />
      </Grid>
    </Grid>
  );
}
