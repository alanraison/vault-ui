import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Settings from 'material-ui-icons/Settings';
import { settings } from '../../actions/admin';

export function SettingsMenuComponent({
  onClick,
}) {
  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>);
}

SettingsMenuComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onClick: settings,
};

export default connect(null, mapDispatchToProps)(SettingsMenuComponent);
