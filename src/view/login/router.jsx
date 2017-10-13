import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import methods from './methods';

export function RouterComponent({
  method,
  onChange,
}) {
  const Login = methods[method];
  return <Login onChange={onChange} value="" />;
}

RouterComponent.propTypes = ({
  method: PropTypes.string,
  onChange: PropTypes.func.isRequired,
});

RouterComponent.defaultProps = ({
  method: null,
});

const mapStateToProps = state => ({
  method: state.location.payload.method,
});

export default connect(mapStateToProps)(RouterComponent);
