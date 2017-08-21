import React from 'react';
import { connect } from 'react-redux';
import Button from '@react-mdc/button';
import '@material/button/dist/mdc.button.css';

import { startUnseal } from '../actions';

export const UnsealButton = ({
  unsealKey,
  onClick,
}) => (
  <Button onClick={() => onClick(unsealKey)}>Unseal</Button>
);

const mapStateToProps = state => ({
  unsealKey: state.app.unseal,
});

const mapDispatchToProps = ({
  onClick: startUnseal,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealButton);
