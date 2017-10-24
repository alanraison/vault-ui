import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Logout from 'material-ui-icons/ExitToApp';

export function LogoutMenuComponent({
  classes,
}) {
  return (
    <ListItem button>
      <ListItemIcon>
        <Logout className={classes.logout} />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  );
}

LogoutMenuComponent.propTypes = {
  classes: PropTypes.shape({
    logout: PropTypes.string,
  }),
};

LogoutMenuComponent.defaultProps = {
  classes: {
    logout: '',
  },
};

const styles = {
  logout: {
    transform: 'rotate(180deg)',
  },
};

export default withStyles(styles)(LogoutMenuComponent);