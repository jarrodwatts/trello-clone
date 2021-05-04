import {
  ButtonBase,
  Container,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import UserHeader from '../components/Headers/UserHeader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AllWorkspacesContainer from '../components/boards/AllWorkspacesContainer';
import { API } from 'aws-amplify';
import { Workspace, ListWorkspacesQuery } from '../API';
import { listWorkspaces } from '../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

const useStyles = makeStyles((theme: Theme) => ({
  topPad: {
    marginTop: '48px',
  },
  leftPad: {
    marginLeft: '8px',
  },
  menuButton: {
    color: '#0079BF',
    background: '#e4f0f6',
    maxHeight: '32px',
    minHeight: '32px',
    width: '100%',
    padding: '4px',
    borderRadius: 4,
  },
  tinyIcon: {
    maxHeight: '16px',
    maxWidth: '16px',
  },
  textBold: {
    fontWeight: 700,
    fontSize: 14,
  },
  thinLight: {
    fontWeight: 600,
    fontSize: 13,
    color: '#5e6c84',
  },
}));

interface Props {}

export default function boards({}: Props): ReactElement {
  const classes = useStyles();

  const [userWorkspaces, setUserWorkspaces] = useState<Workspace[]>([]);

  useEffect(() => {
    getUserWorkspaces();
  }, []);

  async function getUserWorkspaces(): Promise<Workspace[]> {
    try {
      const workspaces = (await API.graphql({
        query: listWorkspaces,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as {
        data: ListWorkspacesQuery;
        errors: any[];
      };
      console.log(workspaces);

      if (workspaces.errors) {
        return [];
      }
      setUserWorkspaces(workspaces?.data?.listWorkspaces?.items as Workspace[]);
      return workspaces?.data?.listWorkspaces?.items as Workspace[];
    } catch (err) {
      console.error(err);
      return [];
    }
  }
  console.log('workspaces:', userWorkspaces);

  return (
    <div>
      <UserHeader />
      <Container maxWidth='lg' className={classes.topPad}>
        <Grid container spacing={4}>
          {/* Side Menu Bar */}
          <Grid item sm={3}>
            <Grid container direction='column' style={{ marginBottom: '16px' }}>
              <ButtonBase className={classes.menuButton}>
                <Grid container alignItems='center' direction='row' spacing={1}>
                  <Grid item>
                    <DashboardIcon
                      color='primary'
                      className={classes.tinyIcon}
                    />
                  </Grid>
                  <Grid item>
                    <Typography color='primary' className={classes.textBold}>
                      Boards
                    </Typography>
                  </Grid>
                </Grid>
              </ButtonBase>
            </Grid>

            <Grid container direction='column'>
              <Typography className={classes.thinLight}>WORKSPACES</Typography>
            </Grid>
          </Grid>

          {/* Main Section */}
          <Grid item sm={9}>
            {/* Map over workspaces */}
            <AllWorkspacesContainer workspaces={userWorkspaces} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
