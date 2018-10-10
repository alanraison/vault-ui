// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import { CircularProgress } from '@material-ui/core';
import ProfileMenu from './profile-menu';
import type { State } from '../../state/reducers';
import { getServerState } from '../../state/core/core-selectors';

const styles = () => ({
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
});

type Props = {
  classes?: {
    appBar?: string,
    appBarShift?: string,
    menuIcon?: string,
    flex?: string,
    grow?: string,
    hide: string,
  },
  loading: boolean,
  menuDrawerOpen?: boolean,
  onMenuClick?: () => void,
};

export const HeaderComponent = ({
  classes = {
    appBar: '',
    appBarShift: '',
    menuIcon: '',
    hide: '',
  },
  loading,
  menuDrawerOpen = false,
  onMenuClick,
}: Props) => (
  <AppBar
    position="static"
    className={classNames(classes.appBar, menuDrawerOpen && classes.appBarShift)}
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
      <Typography variant="title" color="inherit" className={classNames(classes.grow)}>
        Vault
      </Typography>
      { loading ? <CircularProgress variant="indeterminate" color="inherit" /> : null }
      <ProfileMenu />
    </Toolbar>
  </AppBar>
);

HeaderComponent.defaultProps = {
  classes: {
    flex: '',
    appBar: '',
    hide: '',
  },
  menuDrawerOpen: false,
  onMenuClick: () => undefined,
};

const mapStateToProps = (state: State) => ({
  loading: getServerState(state).loading > 0,
});

export default connect(mapStateToProps)(withStyles(styles, { name: 'VaultUIHeader' })(HeaderComponent));
