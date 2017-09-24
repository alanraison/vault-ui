import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chooser from './chooser';
import methods from './methods';

export function RouterComponent({
  method,
}) {
  const Login = method != null && methods[method] ? methods[method] : Chooser;
  return <Login />;
}

RouterComponent.propTypes = ({
  method: PropTypes.string,
});

RouterComponent.defaultProps = ({
  method: null,
});

const mapStateToProps = state => ({
  method: state.location.payload.method,
});

export default connect(mapStateToProps)(RouterComponent);
