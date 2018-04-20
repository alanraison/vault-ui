import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';

const styles = () => ({
  flex: {
    flex: 1,
  },
  menuIcon: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
});

export function HeaderComponent({
  classes,
  menuDrawerOpen,
  onMenuClick,
}) {
  return (
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
        <Typography type="title" color="inherit">
          Vault
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string,
  }),
  menuDrawerOpen: PropTypes.bool,
  onMenuClick: PropTypes.func,
};

HeaderComponent.defaultProps = {
  classes: { flex: '' },
  menuDrawerOpen: false,
  onMenuClick: () => null,
};

export default withStyles(styles, { name: 'VaultUIHeader' })(HeaderComponent);
