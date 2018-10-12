import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function UnsealCountComponent({
  count,
}) {
  return (
    <span>
      {`Please enter ${count} unseal key${count === 1 ? '' : 's'} to unlock Vault.`}
    </span>
  );
}

UnsealCountComponent.propTypes = ({
  count: PropTypes.number.isRequired,
});

const mapStateToProps = state => ({
  count: state.app.sealStatus.sealInfo.t - state.app.sealStatus.sealInfo.progress,
});

export default connect(mapStateToProps)(UnsealCountComponent);
