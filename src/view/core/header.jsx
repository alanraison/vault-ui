import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Lock from 'material-ui-icons/Lock';
import SettingsMenu from './settings';

const styles = () => ({
  flex: {
    flex: 1,
  },
});

export function HeaderComponent({
  loggedIn = false,
  classes,
}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="menu">
          <Lock />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Vault
        </Typography>
        { loggedIn ? <SettingsMenu /> : null }
      </Toolbar>
    </AppBar>
  );
}

HeaderComponent.propTypes = {
  loggedIn: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

HeaderComponent.defaultProps = {
  loggedIn: false,
};

HeaderComponent.contextTypes = {
  state: PropTypes.shape({
    dispatch: PropTypes.func,
    subscribe: PropTypes.func,
    getState: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  loggedIn: state.app.login.loggedIn,
});

export default connect(mapStateToProps)(withStyles(styles)(HeaderComponent));
