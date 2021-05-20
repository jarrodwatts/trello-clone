import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Board, Workspace } from '../../API';
import BoardCard from './BoardCard';
import useStyles from '../../hooks/useStyles';
import AddBoardCard from './AddBoardCard';

interface Props {
  workspace: Workspace;
}

export default function BoardCardContainer({ workspace }: Props): ReactElement {
  const classes = useStyles();

  return (
    <Grid container style={{ marginTop: '4px' }} spacing={2}>
      {workspace.boards?.items?.map((board) => (
        <Grid
          item
          // @ts-ignore
          key={board.id}
          xs={12}
          sm={6}
          md={3}
          className={classes.boardImageRounding}
        >
          <BoardCard board={board as Board} />
        </Grid>
      ))}

      <Grid item xs={12} sm={6} md={3} className={classes.boardImageRounding}>
        <AddBoardCard workspace={workspace} />
      </Grid>
    </Grid>
  );
}
