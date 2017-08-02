import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import StoreState from '../../types';
import Card from '@react-mdc/card';
import Button from '@react-mdc/button';
import { clearError } from '../actions';
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';

export interface Props {
  error: Error;
  source: string;
  onDismiss: () => Action;
}

export const Error: React.SFC<Props> = ({
  error,
  source,
  onDismiss,
}) => (
  <Card>
    <Card.Primary>
      <Card.Title large={true}>Error</Card.Title>
    </Card.Primary>
    <Card.SupportingText>
      Error {source}: {error.toString()}
    </Card.SupportingText>
    <Card.Actions>
      <Button className="dismiss" onClick={onDismiss}>Dismiss</Button>
    </Card.Actions>
  </Card>
);

const mapStateToProps = (state: StoreState) => ({
  error: state.app.error ? state.app.error.err : null,
  source: state.app.error ? state.app.error.source : null,
});

const mapDispatchToProps = ({
  onDismiss: clearError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Error);