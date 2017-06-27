import React from 'react';
import { connect } from 'react-redux';
import Error from './error';
import Loading from './loading';
import Unseal from '../unseal/components';
import Login from '../login/components';

export const Initialise = ({
  error,
  loading,
  sealed,
  unauthenticated,
}) => {
  if (error) {
    return <Error/>;
  }
  if (loading) {
    return <Loading/>;
  }
  if (sealed) {
    return <Unseal/>;
  }
  if (unauthenticated) {
    return <Login/>;
  }
  return null;
}

const mapStateToProps = (state) => ({
  error: state.app.error,
  loading: state.app.sealStatus.loading,
  connected: state.app.connected,
  sealed: state.app.connected && state.app.sealStatus.sealed,
  unauthenticated: state.app.connected && !state.app.login.token
});

export default connect(mapStateToProps)(Initialise);