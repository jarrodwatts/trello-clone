import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ButtonBase, Avatar, Typography } from '@material-ui/core';
import { useUser } from '../context/AuthContext';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

export default function ProfileMenu() {
  const { user } = useUser();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    try {
      await Auth.signOut();
      router.push(`/`);
    } catch (err) {
      console.error(err);
    }
    handleClose();
  };

  return (
    <div>
      <ButtonBase
        aria-controls='profile-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <Avatar
          alt={user?.getUsername()}
          style={{
            maxHeight: '32px',
            maxWidth: '32px',
            background: '#dfe1e6',
          }}
        >
          <Typography style={{ color: '#172b4d' }}>
            <b>{user?.attributes?.email?.charAt(0)?.toUpperCase()}</b>
          </Typography>
        </Avatar>
      </ButtonBase>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
