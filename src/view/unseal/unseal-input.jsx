import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { editUnsealKey } from '../../actions/unseal';

export function UnsealInputComponent({
  value,
  onChange,
}) {
  return (
    <TextField
      id="unseal-key-input"
      fullwidth
      onChange={e => onChange(e.target.value)}
      value={value}
      label="Unseal Key"
    />
  );
}

UnsealInputComponent.propTypes = ({
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
});

UnsealInputComponent.defaultProps = ({
  onChange: () => {},
});

const mapStateToProps = state => ({
  value: state.app.sealStatus.unsealEntryValue,
});

const mapDispatchToProps = ({
  onChange: editUnsealKey,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealInputComponent);
