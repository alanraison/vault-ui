import React from 'react';
import { connect } from 'react-redux';
import Card from '@react-mdc/card';
import Button from '@react-mdc/button';
import { clearError } from '../actions';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';

export const Error = ({
  error,
  source,
  onDismiss,
}) => (
  <Card>
    <Card.Primary>
      <Card.Title>Error</Card.Title>
    </Card.Primary>
    <Card.SupportingText>
      Error with {source}: {error.toString()}
    </Card.SupportingText>
    <Card.Actions>
      <Button onClick={onDismiss}>Dismiss</Button>
    </Card.Actions>
  </Card>
);

const mapStateToProps = (state) => ({
  error: state.app.error.err,
  source: state.app.error.source,
});

const mapDispatchToProps = ({
  onDismiss: clearError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);