// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import ProfileMenu from './profile-menu';

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
  menuDrawerOpen = false,
  onMenuClick,
}: Props) => (
  <AppBar
    position="static"
    className={classNames(classes.appBar, menuDrawerOpen && classes.appBarShift)}
  >
    <Toolbar disableGutters={!menuDrawerOpen}>
      <IconButton
        color="contrast"
        aria-label="menu"
        className={classNames(classes.menuIcon, menuDrawerOpen && classes.hide)}
        onClick={onMenuClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className={classNames(classes.grow)}>
        Vault
      </Typography>
      <ProfileMenu />
    </Toolbar>
  </AppBar>
);

HeaderComponent.defaultProps = {
  classes: {
    flex: '',
    appBar: '',
  },
  menuDrawerOpen: false,
  onMenuClick: () => undefined,
};

export default withStyles(styles, { name: 'VaultUIHeader' })(HeaderComponent);
