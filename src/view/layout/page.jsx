// @flow
import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core';
import classNames from 'classnames';
import Header from './header';
import NavDrawer from '../nav-drawer';
import Router from '../core/router';

const drawerWidth = 240;

type Props = {
  classes?: {
    root?: string,
    appFrame?: string,
    appBar?: string,
    appBarShift?: string,
    content?: string,
    contentShift?: string,
    drawerPaper?: string,
    drawerWidth?: string,
  },
};

type State = {
  drawerOpen: bool,
};

export class PageComponent extends React.Component<Props, State> {
  static defaultProps = {
    classes: {
      root: '',
      appBar: '',
      appFrame: '',
      appBarShift: '',
      content: '',
      contentShift: '',
      drawerPaper: '',
      drawerWidth: '',
    },
  };

  state = {
    drawerOpen: false,
  }

  render() {
    const {
      classes = {
        root: '',
        appFrame: '',
        appBar: '',
        appBarShift: '',
        drawerWidth: '',
        drawerPaper: '',
        content: '',
        contentShift: '',
      },
    } = this.props;
    const { drawerOpen } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header
            classes={{
              appBar: classes.appBar,
              appBarShift: drawerOpen && classes.appBarShift,
            }}
            loading={false}
            menuDrawerOpen={drawerOpen}
            onMenuClick={() => this.setState({ drawerOpen: true })}
          />
          <NavDrawer
            classes={{ drawerWidth: classes.drawerWidth, drawerPaper: classes.drawerPaper }}
            open={drawerOpen}
            onClose={() => this.setState({ drawerOpen: false })}
          />
          <main className={
            classNames(classes.content, drawerOpen && classes.contentShift)}
          >
            <Router />
          </main>
        </div>
      </div>
    );
  }
}

const styles = (theme: Theme) => ({
  root: {
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    height: `calc(100vh - 2 * ${theme.spacing.unit}px)`,
    width: '100%',
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
  content: {
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
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: '64px',
      },
    },
  },
  contentShift: {
    marginLeft: 0,
    transistion: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

export default withStyles(styles, { name: 'VaultUIPage' })(PageComponent);
