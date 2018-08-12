import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { getLogin } from '../../../state/login/selectors';
import { changeToken } from '../../../state/login/methods/token/actions';

export function TokenEntryComponent({
  value,
  onChange,
}) {
  return (
    <TextField
      id="token-input"
      label="Token"
      fullWidth
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  );
}

TokenEntryComponent.propTypes = ({
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
});

const mapStateToProps = state => ({
  value: getLogin(state).token,
});

const mapDispatchToProps = {
  onChange: changeToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(TokenEntryComponent);
