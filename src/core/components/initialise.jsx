import React from 'react';
import { connect } from 'react-redux';
import Error from './error';
import Loading from './loading';
import Unseal from '../../unseal/components';
import Login from '../../login/components';
import Workspace from '../../workspace/components';

export const Initialise = ({
  error,
  loading,
  sealed,
  unauthenticated,
  ready,
}) => {
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading/>;
  }
  if (sealed) {
    return <Unseal />;
  }
  if (unauthenticated) {
    return <Login />;
  }
  if (ready) {
    return <Workspace />;
  }
  return null;
}

const mapStateToProps = state => ({
  error: state.app.error,
  loading: state.app.sealStatus.loading,
  sealed: state.app.connected && state.app.sealStatus.sealed,
  unauthenticated: state.app.connected && !state.app.authToken,
  ready: state.app.connected && state.app.authToken.auth,
});

export default connect(mapStateToProps)(Initialise);
