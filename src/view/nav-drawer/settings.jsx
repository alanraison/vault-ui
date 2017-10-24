import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Settings from 'material-ui-icons/Settings';
import { openSettings } from '../../state/server-settings/actions';

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
  onClick: openSettings,
};

export default connect(null, mapDispatchToProps)(SettingsMenuComponent);
