import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TokenCredentials from '../authMethods/token';

export function CredentialsComponent({
  method,
}) {
  switch (method) {
    case 'token':
      return <TokenCredentials />;
    default:
      return null;
  }
}

CredentialsComponent.propTypes = ({
  method: PropTypes.string.isRequired,
});

const mapStateToProps = state => ({
  method: state.app.login.method,
});

export default connect(mapStateToProps)(CredentialsComponent);
