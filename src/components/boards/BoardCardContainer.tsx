import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Board } from '../../API';
import BoardCard from './BoardCard';
import useStyles from '../../hooks/useStyles';

interface Props {
  boards: Board[];
}

export default function BoardCardContainer({ boards }: Props): ReactElement {
  const classes = useStyles();
  console.log(boards);
  return (
    <Grid container style={{ marginTop: '4px' }} spacing={2}>
      {boards.map((board) => (
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
    </Grid>
  );
}
