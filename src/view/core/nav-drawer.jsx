import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
import Logout from 'material-ui-icons/ExitToApp';
import Settings from 'material-ui-icons/Settings';

const styles = theme => ({
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  logout: {
    transform: 'rotate(180deg)',
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
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Logout className={classes.logout} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
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
