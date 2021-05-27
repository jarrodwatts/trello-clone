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
import AddIcon from '@material-ui/icons/Add';
import CreateWorkspacePopup from '../components/boards/CreateWorkspacePopup';
import CreateWorkspaceForm from '../components/boards/CreateWorkspaceForm';
import WorkspaceDropdown from '../components/boards/WorkspaceDropdown';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
  addIconSmall: {
    maxHeight: '24px',
    maxWidth: '24px',
    color: '#5e6c84',
  },
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

interface Props {}

// We could use getServerSideProps to make the GQL call to list all workspaces here.
// I don't want to stop the entire page loading while we do that though, so we are loading what we can,
// while fetching the data from the API on the client side.
// Update - we can't actually do serverside authenticated requests due to a bug (see _app.js)
export default function Boards({}: Props): ReactElement {
  const classes = useStyles();
  const [userWorkspaces, setUserWorkspaces] = useState<Workspace[]>([]);
  const [openCreate, setOpenCreate] = useState(false);
  const isNotMobile = useMediaQuery<boolean>('(min-width:600px)');

  const handleClose = () => {
    setOpenCreate(false);
  };

  const handleClickOpen = () => {
    setOpenCreate(true);
  };

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

  return (
    <div>
      <UserHeader st={'blue'} />
      <Container maxWidth='lg' className={classes.topPad}>
        <Grid container spacing={4}>
          {/* Side Menu Bar */}
          {isNotMobile && (
            <Grid item sm={3}>
              <Grid
                container
                direction='column'
                style={{ marginBottom: '16px' }}
              >
                <ButtonBase className={classes.menuButton}>
                  <Grid
                    container
                    alignItems='center'
                    direction='row'
                    spacing={1}
                  >
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
                <Grid container direction='row' justify='space-between'>
                  <Grid item>
                    <Typography className={classes.thinLight}>
                      WORKSPACES
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ButtonBase onClick={handleClickOpen}>
                      <AddIcon
                        className={classes.addIconSmall}
                        color='inherit'
                      />
                    </ButtonBase>
                    <CreateWorkspacePopup
                      open={openCreate}
                      workspaces={userWorkspaces}
                      setWorkspaces={setUserWorkspaces}
                      handleClose={handleClose}
                    />
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction='column'
                    alignItems='flex-start'
                    justify='center'
                    spacing={1}
                  >
                    {userWorkspaces.map((ws) => (
                      <WorkspaceDropdown workspace={ws} key={ws.id} />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {/* Main Section */}
          <Grid item xs={12} sm={9}>
            {/* Show create workspace component if no workspaces */}
            {userWorkspaces.length === 0 && (
              <CreateWorkspaceForm
                workspaces={userWorkspaces}
                setWorkspaces={setUserWorkspaces}
              />
            )}

            {userWorkspaces.length === 1 && !userWorkspaces[0].editors && (
              <CreateWorkspaceForm
                workspaces={userWorkspaces}
                setWorkspaces={setUserWorkspaces}
                startingPhase={'invite'}
                inviteToThisWorkspace={userWorkspaces[0]}
              />
            )}
            {/* Map over workspaces */}
            <AllWorkspacesContainer workspaces={userWorkspaces} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
