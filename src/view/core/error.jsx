import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import { clearError } from '../../actions/core';

export function ErrorComponent({
  error,
  source,
  onDismiss,
}) {
  return (
    <Card>
      <CardHeader title={Error}/>
      <CardContent>
        Error {source}: {error.toString()}
      </CardContent>
      <CardActions>
        <Button className="dismiss" onClick={onDismiss}>Dismiss</Button>
      </CardActions>
    </Card>
  );
}

ErrorComponent.propTypes = ({
  error: PropTypes.instanceOf(Error).isRequired,
  source: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
  error: state.app.error.err,
  source: state.app.error.source,
});

const mapDispatchToProps = ({
  onDismiss: clearError,
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent);