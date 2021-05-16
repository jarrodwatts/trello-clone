import { Theme, Typography, ButtonBase } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Board } from '../../API';
import Image from 'next/image';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => ({
  cardImage: {
    position: 'relative',
    zIndex: -1,
    borderRadius: 6,
  },
  cardText: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    color: '#fff',
    fontWeight: 700,
    zIndex: 3,
    fontSize: 16,
  },
  container: {
    position: 'relative',
    width: '100%',
  },
  gradientOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    borderRadius: 6,
  },
}));

interface Props {
  board: Board;
}

// Some css magic to have a black box with 0.25 opacity the same shape as the image sit on top of it
// so that the white text is more readable.
export default function BoardCard({ board }: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  return (
    <ButtonBase
      className={classes.container}
      onClick={() => router.push(`board/${board.id}`)}
    >
      <div className={classes.container}>
        <Image
          src={`/boards/${board.image}.jpg`}
          alt={board.image}
          layout='responsive'
          height={96}
          width={206}
          className={classes.cardImage}
        />
        <Typography variant='h6' className={classes.cardText}>
          {board.name}
        </Typography>
        <div className={classes.gradientOverlay}></div>
      </div>
    </ButtonBase>
  );
}
