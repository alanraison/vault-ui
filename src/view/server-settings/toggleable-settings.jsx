import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

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
              onChange={e => this.handleSwitchChange(e, !this.props.enabled)}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={this.state.open} transitionDuration="auto">
          <Paper className={this.props.classes.detail}>
            {this.props.children}
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
  children: PropTypes.node,
  enabled: PropTypes.bool,
  onEnable: PropTypes.func.isRequired,
  onDisable: PropTypes.func.isRequired,
};

ToggleableSettingsComponent.defaultProps = {
  iconComponent: <div />,
  classes: { detail: '' },
  children: null,
  enabled: false,
};

export default withStyles(styles)(ToggleableSettingsComponent);
