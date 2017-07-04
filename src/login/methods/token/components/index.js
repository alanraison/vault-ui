import React from 'react';
import { connect } from 'react-redux';
import FormField from '@react-mdc/form-field';
import TextField from '@react-mdc/textfield';
import { changeToken } from '../actions';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

const TokenEntry = ({
  value,
  onChange,
}) => {
  let textfield;
  return (
  <div>
    <FormField>
      <TextField id="token-input">
          <input className="mdc-textfield__input"
          ref={ n => textfield = n }
          onChange={() => onChange(textfield.value)}
          value={value}
        />
        <TextField.Label htmlFor="token-input">Token</TextField.Label>
      </TextField>
    </FormField>
  </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.app.login.tokenEntry,
});

const mapDispatchToProps = {
  onChange: changeToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenEntry);