import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormField from '@react-mdc/form-field';
import TextField from '@react-mdc/textfield';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

import { changeToken } from '../../actions/authMethods/token';

export function TokenEntryComponent({
  value,
  onChange,
}) {
  return (
    <FormField>
      <TextField id="token-input">
        <TextField.Input
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        <TextField.Label htmlFor="token-input">Token</TextField.Label>
      </TextField>
    </FormField>
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
