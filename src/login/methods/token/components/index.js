import React from 'react';
import { connect } from 'react-redux';
import FormField from '@react-mdc/form-field';
import TextField from '@react-mdc/textfield';
import { changeToken } from '../actions';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

export const TokenEntry = ({
  value,
  onChange,
}) => (
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

const mapStateToProps = (state) => ({
  value: state.app.login.tokenEntry,
});

const mapDispatchToProps = {
  onChange: changeToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenEntry);