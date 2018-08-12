import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Settings from '@material-ui/icons/SettingsSharp';
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
