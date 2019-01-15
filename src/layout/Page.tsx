import React, { useState } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

import { Header } from './Header';
import { Router } from './Router';

const drawerWidth = 240;
const useStyle = makeStyles((theme: Theme) => ({
  root: {
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    height: `calc(100vh - 2 * ${theme.spacing.unit}px)`,
    width: '100%'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper: {
    width: drawerWidth,
    height: '100%',
    position: 'relative',
  },
  contentClass: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: '56px',
  },
  [theme.breakpoints.up('sm')]: {
    contentClass: {
      height: 'calc(100% - 64px)',
      marginTop: '64px',
    },
  },
  contentShift: {
    marginLeft: 0,
    transistion: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export const Page = ({
}) => {
  const [drawerOpen, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <Header
          classes={{
            appBar: classes.appBar,
            appBarShift: classes.appBarShift
          }} 
          loading={false}
          menuDrawerOpen={drawerOpen}
          onMenuClick={() => setOpen(!drawerOpen)}
          connected={true} /* TODO: inject from state */
        />
        <main className={classNames(classes.contentClass, {
          [classes.contentShift]: drawerOpen,
        })}>
          <Router />
        </main>
      </div>
    </div>
  );
}
