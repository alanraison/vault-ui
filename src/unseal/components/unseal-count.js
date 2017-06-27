import React from 'react';
import { connect } from 'react-redux';

export const UnsealCount = ({
  count,
}) => (
  <span>
    Please enter {count} unseal key{count === 1 ? "":"s"} to unlock Vault.
  </span>
);

const mapStateToProps = (state) => ({
  count: state.app.sealStatus.t - state.app.sealStatus.progress,
});

export default connect(mapStateToProps)(UnsealCount);