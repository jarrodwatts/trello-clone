import {
  Grid,
  Container,
  Avatar,
  Typography,
  makeStyles,
  Theme,
  Tab,
  Tabs,
} from '@material-ui/core';
import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import {
  Workspace,
  GetWorkspaceQuery,
  GetWorkspaceQueryVariables,
} from '../../API';
import { getWorkspace } from '../../graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import UserHeader from '../../components/Headers/UserHeader';
import randomGradient from '../../lib/randomGradient';
import BoardCardContainer from '../../components/boards/BoardCardContainer';
import CreateWorkspaceForm from '../../components/boards/CreateWorkspaceForm';

const useStyles = makeStyles((theme: Theme) => ({
  name: {
    color: '#172b4d',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '28px',
  },
  bigAvatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    textAlign: 'center',
  },
  description: {
    color: '172b4d',
    fontWeight: 400,
    lineHeight: '20px',
    fontSize: '14px',
  },
  tabs: {
    flexGrow: 1,
  },
}));

interface Props {}

export default function WorkspacePage({}: Props): ReactElement {
  const router = useRouter();
  const classes = useStyles();
  const { workspaceid } = router.query;
  const [workspace, setWorkspace] = useState<Workspace>();
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    if (workspaceid && !workspace) {
      fetchWorkspaceData();
    }
  }, [workspaceid]);

  // Fetch data for the board client-side
  const fetchWorkspaceData = async (): Promise<Workspace | void> => {
    const input: GetWorkspaceQueryVariables = {
      id: workspaceid as string,
    };

    try {
      const response = (await API.graphql({
        query: getWorkspace,
        variables: input,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as { data: GetWorkspaceQuery; errors: any[] };

      setWorkspace(response.data.getWorkspace as Workspace);
      return response.data.getWorkspace as Workspace;
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  if (workspace) {
    return (
      <React.Fragment>
        <UserHeader st={'blue'} />
        <div
          style={{
            minHeight: '216px',
            backgroundColor: '#F4F5F7',
            width: '100%',
          }}
        >
          <Container maxWidth='md'>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='flex-start'
              spacing={2}
            >
              <Grid item style={{ marginTop: '64px' }}>
                <Avatar
                  className={classes.bigAvatar}
                  style={{ background: randomGradient() }}
                >
                  <b style={{ fontSize: 48 }}>
                    {workspace?.name?.charAt(0)?.toUpperCase()}
                  </b>
                </Avatar>
              </Grid>
              <Grid item style={{ marginTop: '64px' }}>
                <Grid
                  container
                  direction='column'
                  alignItems='flex-start'
                  spacing={1}
                >
                  <Grid item>
                    <Typography className={classes.name}>
                      {workspace?.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.description}>
                      {workspace?.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Tabs
              value={tab}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              style={{ marginTop: '24px' }}
            >
              <Tab label='Boards' />
              <Tab label='Members' />
            </Tabs>
          </Container>
        </div>

        <div></div>

        {/* Boards Tab */}
        {tab === 0 && (
          <div style={{ marginTop: '16px' }}>
            <Container maxWidth='md'>
              <BoardCardContainer workspace={workspace} />
            </Container>
          </div>
        )}

        {/* Members Tab */}
        {tab === 1 && (
          <div style={{ marginTop: '16px' }}>
            <Container maxWidth='md'>
              <CreateWorkspaceForm
                startingPhase={'invite'}
                inviteToThisWorkspace={workspace}
              />
            </Container>
          </div>
        )}
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
}
