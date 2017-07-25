import React from 'react';
import { connect } from 'react-redux';
import TokenCredentials from '../methods/token/components';

const Credentials = ({
  method,
}) => {
  switch (method) {
    case 'token':
      return <TokenCredentials/>
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  method: state.app.login.method,
})

export default connect(mapStateToProps)(Credentials);