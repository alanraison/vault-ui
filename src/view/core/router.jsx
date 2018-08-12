import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NOT_FOUND } from 'redux-first-router';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import * as actions from '../../state/actions';
import NotFound from './not-found';
import ShowError from './error';
import Loading from './loading';
import Unseal from '../unseal';
import Login from '../login';
import Workspace from '../workspace';
import ServerSettings from '../server-settings';

const styles = () => ({
  header: {
    flexGrow: 1,
  },
});

export const routesMap = ({
  [actions.HOME]: null,
  [actions.ERROR]: ShowError,
  [NOT_FOUND]: NotFound,
  [actions.INITIALISE]: Loading,
  [actions.sealStatus.UNSEAL_KEY_REQUIRED]: Unseal,
  [actions.login.START_CHOOSE_LOGIN_METHOD]: Login,
  [actions.login.SELECT_LOGIN_METHOD]: Login,
  [actions.login.LOGIN_SUCCESS]: Workspace,
  [actions.serverSettings.OPEN_SETTINGS]: ServerSettings,
});

export function RouteContainer({
  classes,
  route,
}) {
  const Route = routesMap[route] ? routesMap[route] : routesMap[NOT_FOUND];
  return (
    <Grid container className={classes.header} justify="center">
      <Route />
    </Grid>
  );
}

RouteContainer.propTypes = ({
  classes: PropTypes.shape(),
  route: PropTypes.string.isRequired,
});

RouteContainer.defaultProps = ({
  classes: { header: '' },
});

const mapStateToProps = state => ({
  route: state.location.type,
});

export default connect(mapStateToProps)(withStyles(styles)(RouteContainer));
