import React, { useState, ReactElement } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  CreateWorkspaceInput,
  CreateWorkspaceMutation,
  UpdateWorkspaceInput,
  UpdateWorkspaceMutation,
  Workspace,
} from '../../API';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import { createWorkspace, updateWorkspace } from '../../graphql/mutations';
import InviteSuccess from './InviteSuccess';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  field: {
    background: '#FAFBFC',
    color: theme.palette.text.hint,
  },
  title: {
    color: '#091E42',
    fontSize: 24,
    letterSpacing: '-0.01em',
    lineHeight: '28px',
    marginBottom: '12px',
    textAlign: 'left',
    fontWeight: 600,
  },
  subtitle: {
    color: '#6B778C',
    margin: '12px auto ',
    fontSize: 18,
    textAlign: 'left',
    lineHeight: '20px',
    fontWeight: 400,
  },
  caption: {
    fontSize: 12,
    color: '#6B778C',
    marginBottom: '12px',
    marginTop: '4px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#0052CC',
    color: '#fff',
    fontWeight: 700,
  },
}));

interface Props {
  workspaces?: Workspace[];
  setWorkspaces?: React.Dispatch<React.SetStateAction<Workspace[]>>;
  startingPhase?: string;
  inviteToThisWorkspace?: Workspace;
}

export default function CreateWorkspaceForm({
  workspaces,
  setWorkspaces,
  startingPhase,
  inviteToThisWorkspace,
}: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [memberName, setMemberName] = useState<string>('');
  const [phase, setPhase] = useState<string>(startingPhase || 'create');
  const [createdWorkspace, setCreatedWorksapce] = useState<Workspace | null>(
    inviteToThisWorkspace ? inviteToThisWorkspace : null
  );
  const [showSnackbarSuccess, setShowSnackbar] = useState<boolean>(false);
  const [lastAddedMember, setLastAddedMember] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(name, description);

    const newWorkspaceInputData: CreateWorkspaceInput = {
      name: name,
      description: description,
    };

    const newWorkspace = (await API.graphql({
      query: createWorkspace,
      variables: { input: newWorkspaceInputData },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: CreateWorkspaceMutation; errors: any[] };

    if (!newWorkspace.errors && setWorkspaces && workspaces) {
      setPhase('invite');
      setWorkspaces([
        ...workspaces,
        newWorkspace.data.createWorkspace as Workspace,
      ]);
      setCreatedWorksapce(newWorkspace.data.createWorkspace as Workspace);
    }
  };

  const inviteUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('added:', memberName);

    if (createdWorkspace) {
      console.log('existin editors:', createdWorkspace.editors);

      const existingWorkspace = createdWorkspace as Workspace;
      const newEditors = existingWorkspace.editors
        ? [...existingWorkspace.editors, memberName]
        : [memberName];

      const updatedWorkspaceInput: UpdateWorkspaceInput = {
        // @ts-ignore
        id: createdWorkspace.id,
        editors: newEditors,
      };

      try {
        const newWorkpace = (await API.graphql({
          query: updateWorkspace,
          variables: { input: updatedWorkspaceInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as { data: UpdateWorkspaceMutation };

        setLastAddedMember(memberName);
        setShowSnackbar(true);
        setMemberName('');
        setCreatedWorksapce(newWorkpace.data.updateWorkspace as Workspace);
      } catch (error) {
        console.error(error);
      }

      console.log('added:', memberName);
    }
  };

  if (phase === 'create') {
    return (
      <Grid container direction='column' justify='center'>
        <Grid item>
          <Typography component='h1' className={classes.title}>
            Let&apos;s build a workspace
          </Typography>
        </Grid>
        <Grid item>
          <Typography component='h2' className={classes.subtitle}>
            Boost your productivity by making it easier for everyone to access
            boards in one location.
          </Typography>
        </Grid>
        <Grid
          container
          direction='row-reverse'
          spacing={3}
          alignItems='center'
          justify='center'
        >
          <Grid item sm={4} md={4}>
            <img
              src={`/random/createWorkspace1.jpg`}
              style={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item sm={8} md={7}>
            <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
              <TextField
                className={classes.field}
                id='workspaceName'
                label='Workspace name'
                margin='dense'
                variant='outlined'
                fullWidth
                autoFocus
                name='workspaceName'
                onChange={(e) => setName(e.target.value)}
              />
              <Typography
                variant='subtitle1'
                className={classes.caption}
                color='textSecondary'
              >
                This is the name of your company, team or organization
              </Typography>

              <TextField
                className={classes.field}
                rows={4}
                id='workspaceDescription'
                label='Workspace Description'
                multiline
                margin='dense'
                variant='outlined'
                fullWidth
                name='workspaceDescription'
                onChange={(e) => setDescription(e.target.value)}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
              >
                Continue
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  if (phase === 'invite') {
    return (
      <Grid container direction='column' justify='center'>
        <Grid item>
          <Typography component='h1' className={classes.title}>
            Invite Your Team{' '}
            {inviteToThisWorkspace ? `to ${inviteToThisWorkspace.name}` : ''}!
          </Typography>
        </Grid>
        <Grid item>
          <Typography component='h2' className={classes.subtitle}>
            Craplo works crappiest when you work with your team. Invite your new
            team members to get going!
          </Typography>
        </Grid>
        <Grid
          container
          direction='row-reverse'
          spacing={3}
          alignItems='center'
          justify='center'
        >
          <Grid item sm={4} md={4}>
            <img
              src={`/random/createWorkspace2.jpg`}
              style={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item sm={8} md={7}>
            <form className={classes.form} onSubmit={(e) => inviteUser(e)}>
              <TextField
                className={classes.field}
                id='workspaceMembers'
                label='Workspace members'
                margin='dense'
                variant='outlined'
                fullWidth
                autoFocus
                value={memberName}
                name='workspaceMembers'
                onChange={(e) => setMemberName(e.target.value)}
              />
              <Typography
                variant='subtitle1'
                className={classes.caption}
                color='textSecondary'
              >
                <strong>Pro tip:</strong> Type the username of the user you want
                to invite and add them! They will be able to view this
                workspace&apos;s boards.
              </Typography>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                className={classes.submit}
              >
                Invite to Workspace
              </Button>
              {/* Show Snack Bar when invite success */}
              <InviteSuccess
                memberName={lastAddedMember}
                open={showSnackbarSuccess}
                toggleOpen={setShowSnackbar}
              />
              <Button
                variant='text'
                color='inherit'
                fullWidth
                onClick={() => router.reload()}
              >
                I am ready to go!
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <div>Loading...</div>;
  }
}
