import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logout from '@material-ui/icons/ExitToApp';
import { logout } from '../../state/user/login/actions';

export function LogoutMenuComponent({
  classes,
  onClick,
}) {
  return (
    <ListItem button onClick={onClick}>
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
  onClick: PropTypes.func,
};

LogoutMenuComponent.defaultProps = {
  classes: {
    logout: '',
  },
  onClick: () => null,
};

const styles = {
  logout: {
    transform: 'rotate(180deg)',
  },
};

const mapDispatchToProps = {
  onClick: logout,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(LogoutMenuComponent));
