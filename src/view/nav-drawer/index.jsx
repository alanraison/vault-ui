import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Settings from './settings';
import Logout from './logout';

const styles = theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
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
          <Logout />
        </List>
      </div>
    </Drawer>
  );
}

NavDrawerComponent.propTypes = {
  classes: PropTypes.shape(),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

NavDrawerComponent.defaultProps = {
  classes: {},
};

export default withStyles(styles)(NavDrawerComponent);
