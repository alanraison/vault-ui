import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

import { unsealRequest } from '../../actions/sealStatus';

export function UnsealButtonComponent({
  unsealKey,
  onClick,
}) {
  return (
    <Button onClick={() => onClick(unsealKey)}>Unseal</Button>
  );
}

UnsealButtonComponent.propTypes = ({
  unsealKey: PropTypes.string.isRequired,
  onClick: PropTypes.func,
});

UnsealButtonComponent.defaultProps = ({
  onClick: () => {},
});

const mapStateToProps = state => ({
  unsealKey: state.app.sealStatus.unsealKey,
});

const mapDispatchToProps = ({
  onClick: unsealRequest,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealButtonComponent);
