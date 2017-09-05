import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { changeToken } from '../../../actions/methods/token';

export function TokenEntryComponent({
  value,
  onChange,
}) {
  return (
    <TextField
      id="token-input"
      label="Token"
      fullWidth
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
}

TokenEntryComponent.propTypes = ({
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
});

TokenEntryComponent.defaultProps = ({
  onChange: () => {},
});

const mapStateToProps = state => ({
  value: state.app.login.tokenEntry,
});

const mapDispatchToProps = {
  onChange: changeToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenEntryComponent);
