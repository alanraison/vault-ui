import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import type { Theme } from '@material-ui/core';
import Settings from './settings';
import Logout from './logout';

const styles = (theme: Theme) => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {},
}: {
  drawerHeader: {
    display: string,
    alignItems: string,
    justifyContent: string,
  }
});

export function NavDrawerComponent({
  classes,
  open,
  onClose,
}) {
  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      type="persistent"
      open={open}
      onRequestClose={onClose}
    >
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={onClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <List>
          <Settings />
          <Logout onClick={onClose} />
        </List>
      </div>
    </Drawer>
  );
}

NavDrawerComponent.propTypes = {
  classes: PropTypes.shape({
    drawerPaper: PropTypes.string,
  }),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

NavDrawerComponent.defaultProps = {
  classes: {},
};

export default withStyles(styles)(NavDrawerComponent);
