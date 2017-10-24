import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui-icons/Settings';
import Menu, { MenuItem } from 'material-ui/Menu';

import { openSettings } from '../../state/server-settings/actions';

export class SettingsMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen(e) {
    this.setState({ open: true, anchorEl: e.target });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      <div>
        <IconButton
          color="contrast"
          aria-label="configure"
          aria-haspopup="true"
          aria-owns={this.state.open ? 'settings-menu' : null}
          onClick={this.handleOpen}
        >
          <Settings />
        </IconButton>
        <Menu
          id="settings-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <MenuItem
            id="server-settings"
            onClick={
              (e) => {
                this.handleClose(e);
                this.props.onSettingsClick();
              }}
          >
            Server Settings
          </MenuItem>
          <MenuItem
            id="user-settings"
            onClick={this.handleClose}
          >
            User Settings
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

SettingsMenuComponent.propTypes = {
  onSettingsClick: PropTypes.func,
};

SettingsMenuComponent.defaultProps = {
  onSettingsClick: () => null,
};

const mapDispatchToProps = {
  onSettingsClick: openSettings,
};

export default connect(null, mapDispatchToProps)(SettingsMenuComponent);
