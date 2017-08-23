import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const PlainUnsealCount = ({
  count,
}) => (
  <span>
    Please enter {count} unseal key{count === 1 ? '' : 's'} to unlock Vault.
  </span>
);

PlainUnsealCount.propTypes = ({
  count: PropTypes.number.isRequired,
});

const mapStateToProps = state => ({
  count: state.app.sealStatus.t - state.app.sealStatus.progress,
});

export default connect(mapStateToProps)(PlainUnsealCount);
