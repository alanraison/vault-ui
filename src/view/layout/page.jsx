import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Header from './header';
import NavDrawer from '../core/nav-drawer';
import Router from '../core/router';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    height: '100%',
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
    marginLeft: -drawerWidth,
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

export class PageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header
            classes={{
              appBar: classes.appBar,
              appBarShift: this.state.drawerOpen && classes.appBarShift,
            }}
            menuDrawerOpen={this.state.drawerOpen}
            onMenuClick={() => this.setState({ drawerOpen: true })}
          />
          <NavDrawer
            classes={{ drawerWidth: classes.drawerWidth, drawerPaper: classes.drawerPaper }}
            open={this.state.drawerOpen}
            onClose={() => this.setState({ drawerOpen: false })}
          />
          <main className={
            classNames(classes.content, this.state.drawerOpen && classes.contentShift)}
          >
            <Router />
          </main>
        </div>
      </div>
    );
  }
}

PageComponent.propTypes = {
  classes: PropTypes.shape(),
};

PageComponent.defaultProps = {
  classes: {},
};

export default withStyles(styles, { name: 'VaultUIPage' })(PageComponent);
