import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { ButtonBase, Grid } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import { useUser } from '../../context/AuthContext';
import GuestHeader from './GuestHeader';
import ProfileMenu from '../ProfileMenu';
import { useRouter } from 'next/router';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userBarHeight: {
      minHeight: '40px',
      maxHeight: '40px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    iconButton: {
      minHeight: '32px',
      minWidth: '32px',
      borderRadius: 4,
    },
    pad: {
      paddingLeft: '4px',
    },
  })
);

interface Props {
  // st = style type short hand
  st: string;
}

export default function UserHeader({ st }: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useUser();
  const isNotMobile = useMediaQuery<boolean>('(min-width:600px)');

  const backgroundStyle = () => {
    if (st === 'blue') {
      return { backgroundColor: '#4e97c2' };
    } else {
      return { backgroundColor: 'hsla(0,0%,100%,.3)' };
    }
  };

  if (user) {
    return (
      <React.Fragment>
        <AppBar
          position='fixed'
          elevation={0}
          className={classes.userBarHeight}
          style={
            st === 'blue'
              ? { backgroundColor: '#026AA7' }
              : {
                  backgroundColor: 'rgba(0,0,0,.32)',
                }
          }
        >
          {isNotMobile && (
            <Grid
              container
              direction='row'
              alignItems='center'
              spacing={1}
              className={classes.pad}
            >
              <Grid item>
                <ButtonBase
                  className={classes.iconButton}
                  style={backgroundStyle()}
                >
                  <AppsIcon />
                </ButtonBase>
              </Grid>
              <Grid item>
                <ButtonBase
                  onClick={() => router.push(`/`)}
                  className={classes.iconButton}
                  style={backgroundStyle()}
                >
                  <HomeIcon />
                </ButtonBase>
              </Grid>
              <Grid item>
                <ButtonBase
                  onClick={() => router.push(`/boards`)}
                  className={classes.iconButton}
                  style={backgroundStyle()}
                >
                  <DashboardIcon
                    style={{ marginRight: '8px', paddingLeft: '4px' }}
                  />
                  <Typography
                    style={{
                      fontWeight: 700,
                      paddingRight: '8px',
                    }}
                  >
                    Boards
                  </Typography>
                </ButtonBase>
              </Grid>
            </Grid>
          )}

          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item>
              <DashboardIcon
                color={st === 'blue' ? 'secondary' : undefined}
                style={st === 'blue' ? {} : { color: '#dcdcdd' }}
              />
            </Grid>
            <Grid item>
              <Typography
                color={st === 'blue' ? 'secondary' : undefined}
                style={
                  st === 'blue'
                    ? { fontWeight: 700 }
                    : { color: '#dcdcdd', fontWeight: 700 }
                }
                variant='h6'
              >
                Craplo
              </Typography>
            </Grid>
          </Grid>

          {isNotMobile && (
            <Grid
              container
              direction='row'
              justify='flex-end'
              spacing={1}
              style={{ marginRight: '4px' }}
            >
              <Grid item>
                <ButtonBase
                  className={classes.iconButton}
                  style={backgroundStyle()}
                >
                  <AddIcon />
                </ButtonBase>
              </Grid>
              <Grid item>
                <ButtonBase
                  className={classes.iconButton}
                  style={backgroundStyle()}
                >
                  <InfoIcon />
                </ButtonBase>
              </Grid>
              <Grid item>
                <ButtonBase
                  className={classes.iconButton}
                  style={backgroundStyle()}
                >
                  <NotificationsIcon />
                </ButtonBase>
              </Grid>

              <Grid item>
                <ProfileMenu />
              </Grid>
            </Grid>
          )}
        </AppBar>

        {/* Padding to put items below the header */}
        <div style={{ minHeight: '40px' }}></div>
      </React.Fragment>
    );
  } else {
    return <GuestHeader />;
  }
}
