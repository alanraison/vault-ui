import React from 'react';
import { connect } from 'react-redux';
import Button from '@react-mdc/button';
import { startUnseal } from '../actions';
import '@material/button/dist/mdc.button.css';

export const UnsealButton = ({
  unsealKey,
  onClick,
}) => (
  <Button onClick={() => onClick(unsealKey)}>Unseal</Button>
);

const mapStateToProps = (state) => ({
  unsealKey: state.app.sealStatus.unseal,
})

const mapDispatchToProps = ({
  onClick: startUnseal,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealButton);