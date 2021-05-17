import React, { ReactElement } from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { Workspace } from '../../API';
import BoardCardContainer from './BoardCardContainer';
import randomGradient from '../../lib/randomGradient';

interface Props {
  workspaces: Workspace[];
}

export default function AllWorkspacesContainer({
  workspaces,
}: Props): ReactElement {
  return (
    <div>
      {workspaces.map((workspace) => (
        <Grid
          container
          direction='column'
          key={workspace.id}
          spacing={1}
          style={{ marginBottom: '32px' }}
        >
          {/* Workspace Icon and Workspace Name */}
          <Grid container direction='row' alignItems='center' spacing={1}>
            <Grid item>
              <Avatar style={{ background: randomGradient() }}>
                <b>{workspace?.name?.charAt(0)?.toUpperCase()}</b>
              </Avatar>
            </Grid>
            <Grid item>
              <Typography
                variant='h6'
                color='textPrimary'
                style={{ fontWeight: 700 }}
              >
                {workspace.name}
              </Typography>
            </Grid>
          </Grid>

          <BoardCardContainer workspace={workspace} />
        </Grid>
      ))}
    </div>
  );
}
