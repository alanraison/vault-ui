import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '@react-mdc/card';
import Button from '@react-mdc/button';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import { clearError } from '../actions';

export const ErrorComponent = ({
  error,
  source,
  onDismiss,
}) => (
  <Card>
    <Card.Primary>
      <Card.Title large>Error</Card.Title>
    </Card.Primary>
    <Card.SupportingText>
      Error {source}: {error.toString()}
    </Card.SupportingText>
    <Card.Actions>
      <Button className="dismiss" onClick={onDismiss}>Dismiss</Button>
    </Card.Actions>
  </Card>
);

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
