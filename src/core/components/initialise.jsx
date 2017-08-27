import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ErrorComponent from './error';
import Loading from './loading';
import Unseal from '../../unseal/components';
import LoginComponent from '../../login/components';
import Workspace from '../../workspace/components';

export function InitialiseComponent({
  error,
  loading,
  sealed,
  unauthenticated,
  ready,
}) {
  if (error) {
    return <ErrorComponent />;
  }
  if (loading) {
    return <Loading />;
  }
  if (sealed) {
    return <Unseal />;
  }
  if (unauthenticated) {
    return <LoginComponent />;
  }
  if (ready) {
    return <Workspace />;
  }
  return null;
}

InitialiseComponent.propTypes = ({
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool,
  sealed: PropTypes.bool,
  unauthenticated: PropTypes.bool,
  ready: PropTypes.bool,
});

InitialiseComponent.defaultProps = ({
  error: null,
  loading: false,
  sealed: false,
  unauthenticated: false,
  ready: false,
});

const mapStateToProps = state => ({
  error: state.app.error,
  loading: state.app.sealStatus.loading,
  sealed: state.app.connected && state.app.sealStatus.sealed,
  unauthenticated: state.app.connected && !state.app.authToken,
  ready: state.app.connected && state.app.authToken.auth,
});

export default connect(mapStateToProps)(InitialiseComponent);
