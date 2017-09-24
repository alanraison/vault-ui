import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Lock from 'material-ui-icons/Lock';
import SettingsMenu from '../core/settings';

const styles = () => ({
  flex: {
    flex: 1,
  },
});

export function HeaderComponent({
  loggedIn,
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
  classes: PropTypes.shape({
    flex: PropTypes.string,
  }),
};

HeaderComponent.defaultProps = {
  loggedIn: false,
  classes: { flex: '' },
};

const mapStateToProps = state => ({
  loggedIn: state.app.login.loggedIn,
});

export default connect(mapStateToProps)(withStyles(styles)(HeaderComponent));
