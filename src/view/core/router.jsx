import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NOT_FOUND } from 'redux-first-router';
import Grid from 'material-ui/Grid';

import actions from '../../actions';
import ShowError from './error';
import Loading from './loading';
import Unseal from '../unseal';
import LoginChooser from '../login/chooser';
import LoginDetails from '../login/details';
import Workspace from '../workspace';
import ServerSettings from '../serverSettings';

const NotFound = () => <div>Path not found.</div>;

export const routesMap = ({
  [actions.HOME]: null,
  [actions.ERROR]: ShowError,
  [NOT_FOUND]: NotFound,
  [actions.INITIALISE]: Loading,
  [actions.sealStatus.UNSEAL_KEY_REQUIRED]: Unseal,
  [actions.login.START_CHOOSE_LOGIN_METHOD]: LoginChooser,
  [actions.login.SELECT_LOGIN_METHOD]: LoginDetails,
  [actions.login.LOGIN_SUCCESS]: Workspace,
  [actions.admin.SETTINGS]: ServerSettings,
});

export function RouteContainer({
  route,
}) {
  const Route = routesMap[route] ? routesMap[route] : routesMap[NOT_FOUND];
  return (
    <Grid item xs>
      <Route />
    </Grid>);
}

RouteContainer.propTypes = ({
  route: PropTypes.string.isRequired,
});

const mapStateToProps = state => ({
  route: state.location.type,
});

export default connect(mapStateToProps)(RouteContainer);
