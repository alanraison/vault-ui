import React from 'react';
import { connect } from 'react-redux';
import { startUnseal } from '../actions';

const UnsealButton = ({
  unsealKey,
  onClick,
}) => (
  <button onClick={() => onClick(unsealKey)}>Unseal</button>
);

const mapStateToProps = (state) => ({
  unsealKey: state.app.sealStatus.unseal,
})

const mapDispatchToProps = ({
  onClick: startUnseal,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealButton);