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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
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
      backgroundColor: '#4e97c2',
      borderRadius: 4,
    },
    pad: {
      paddingLeft: '4px',
    },
  })
);

export default function UserHeader(): ReactElement {
  const classes = useStyles();
  const { user } = useUser();

  if (user) {
    return (
      <div className={classes.root}>
        {/* TODO: Set Background color to transparent and change elevation on scroll */}
        <AppBar
          position='static'
          color='primary'
          elevation={0}
          className={classes.userBarHeight}
        >
          <Grid
            container
            direction='row'
            alignItems='center'
            spacing={1}
            className={classes.pad}
          >
            <Grid item>
              <ButtonBase className={classes.iconButton}>
                <AppsIcon />
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase className={classes.iconButton}>
                <HomeIcon />
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase
                className={classes.iconButton}
                style={{ paddingRight: '8px', paddingLeft: ' 4px' }}
              >
                <DashboardIcon style={{ marginRight: '8px' }} />
                <Typography style={{ fontWeight: 700 }}>Boards</Typography>
              </ButtonBase>
            </Grid>
          </Grid>

          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item>
              <DashboardIcon color='secondary' style={{ marginRight: '2px' }} />
            </Grid>
            <Grid item>
              <Typography
                color='secondary'
                variant='h6'
                style={{ fontWeight: 700 }}
              >
                Craplo
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justify='flex-end'
            spacing={1}
            style={{ marginRight: '4px' }}
          >
            <Grid item>
              <ButtonBase className={classes.iconButton}>
                <AddIcon />
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase className={classes.iconButton}>
                <InfoIcon />
              </ButtonBase>
            </Grid>
            <Grid item>
              <ButtonBase className={classes.iconButton}>
                <NotificationsIcon />
              </ButtonBase>
            </Grid>

            <Grid item>
              <ProfileMenu />
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  } else {
    return <GuestHeader />;
  }
}
