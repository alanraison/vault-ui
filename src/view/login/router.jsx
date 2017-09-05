import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import methods from './methods';

export function Router({
  method,
}) {
  const Login = methods[method];
  return <Login />;
}

Router.propTypes = ({
  method: PropTypes.string.isRequired,
});

const mapStateToProps = state => ({
  method: state.location.payload.method,
});

export default connect(mapStateToProps)(Router);
