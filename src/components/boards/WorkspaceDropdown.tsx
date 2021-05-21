import {
  Grid,
  ButtonBase,
  Avatar,
  Typography,
  makeStyles,
  Theme,
  Button,
} from '@material-ui/core';
import React, { ReactElement, useState } from 'react';
import { Workspace } from '../../API';
import randomGradient from '../../lib/randomGradient';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) => ({
  smallAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  workspaceNameSideBar: {
    fontWeight: 'bold',
    color: '#172b4d',
    fontSize: 14,
  },
}));

interface Props {
  workspace: Workspace;
}

export default function WorkspaceDropdown({ workspace }: Props): ReactElement {
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Grid item key={workspace.id} xs={12} style={{ width: '100%' }}>
      <ButtonBase
        style={{ width: '100%', padding: '8px' }}
        onClick={() => setOpen(!open)}
      >
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='space-between'
          spacing={1}
          style={{ width: '100%' }}
        >
          <Grid item>
            <Grid container direction='row' alignItems='center' spacing={1}>
              <Grid item>
                <Avatar
                  className={classes.smallAvatar}
                  style={{ background: randomGradient() }}
                >
                  <b>{workspace?.name?.charAt(0)?.toUpperCase()}</b>
                </Avatar>
              </Grid>
              <Grid item>
                <Typography className={classes.workspaceNameSideBar}>
                  {workspace.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <ButtonBase>
              {!open ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </ButtonBase>
          </Grid>
        </Grid>
      </ButtonBase>
      {open && (
        <Grid
          container
          direction='column'
          justify='center'
          style={{ padding: '4px', marginLeft: '8px', width: '100%' }}
        >
          <Button
            fullWidth
            variant='text'
            color='default'
            onClick={() => router.push(`/workspace/${workspace.id}`)}
          >
            Edit {workspace.name}
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
