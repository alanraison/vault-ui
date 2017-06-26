import React from 'react';
import { connect } from 'react-redux';
import Button from '@react-mdc/button';
import { clearError } from '../actions';

export const Error = ({
  error,
  source,
  onDismiss,
}) => (
  <div>
    <h1>Error!</h1>
    <div>Error with {source}: {error.toString()}</div>
    <Button onClick={onDismiss}>Dismiss</Button>
  </div>
);

const mapStateToProps = (state) => ({
  error: state.app.error.err,
  source: state.app.error.source,
});

const mapDispatchToProps = ({
  onDismiss: clearError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);