import React from 'react';
import { AppBar, Theme, Toolbar, IconButton, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import { Menu as MenuIcon } from '@material-ui/icons';

interface Props {
  loading: boolean;
  connected: boolean;
  menuDrawerOpen: boolean;
  classes: {
    appBar: any,
    appBarShift: any,
  };
  onMenuClick: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  flex: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  disconnected: {
    backgroundColor: theme.palette.grey['800'],
  },
}))

export const Header = ({
  loading,
  connected,
  menuDrawerOpen = false,
  onMenuClick,
  classes: parentClasses,
}: Props) => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      className={classNames(
        parentClasses.appBar, {
          [classes.disconnected]: !connected,
          [parentClasses.appBarShift]: menuDrawerOpen,
        },

      )}
    >
      <Toolbar disableGutters={!menuDrawerOpen}>
        <IconButton
          color="inherit"
          aria-label="menu"
          className={classNames(classes.menuIcon, menuDrawerOpen && classes.hide)}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Vault
        </Typography>
        { loading ? <CircularProgress variant="indeterminate" color="inherit" /> : null }
        {/* <ProfileMenu /> */}
      </Toolbar>
    </AppBar>
  );
}
