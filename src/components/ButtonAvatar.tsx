import { Grid, ButtonBase, Avatar } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from '../hooks/useStyles';

interface Props {
  link: string;
  alt: string;
  src: string;
}

export default function ButtonAvatar({ link, alt, src }: Props): ReactElement {
  const classes = useStyles();
  return (
    <Grid item style={{ padding: '16px' }}>
      <ButtonBase href={link} target='_blank'>
        <Avatar alt={alt} className={classes.large} src={src} />
      </ButtonBase>
    </Grid>
  );
}
