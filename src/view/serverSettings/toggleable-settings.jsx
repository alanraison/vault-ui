import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import Paper from 'material-ui/Paper';
import { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Switch from 'material-ui/Switch';

const styles = theme => ({
  detail: {
    backgroundColor: theme.palette.background.default,
  },
});

export class ToggleableSettingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }
  handleSwitchChange(e, checked) {
    if (checked) {
      this.props.onEnable();
    } else {
      this.props.onDisable();
    }
  }
  render() {
    return (
      <div>
        <ListItem>
          <ListItemIcon>
            {this.props.iconComponent}
          </ListItemIcon>
          <ListItemText
            primary="UserPass"
            onClick={() => this.setState({ open: !this.state.open })}
          />
          <ListItemSecondaryAction>
            <Switch
              checked={this.props.enabled}
              onChange={this.handleSwitchChange}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto">
          <Paper className={this.props.classes.detail}>
          The settings
          </Paper>
        </Collapse>
      </div>
    );
  }
}

ToggleableSettingsComponent.propTypes = {
  iconComponent: PropTypes.element,
  classes: PropTypes.shape({
    detail: PropTypes.string,
  }),
  enabled: PropTypes.bool,
  onEnable: PropTypes.func.isRequired,
  onDisable: PropTypes.func.isRequired,
};

ToggleableSettingsComponent.defaultProps = {
  iconComponent: <div />,
  classes: { detail: '' },
  enabled: false,
};

export default withStyles(styles)(ToggleableSettingsComponent);
