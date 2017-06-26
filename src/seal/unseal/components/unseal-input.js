import React from 'react';
import { connect } from 'react-redux';
import { editUnsealKey } from '../actions'
import FormField from '@react-mdc/form-field';
// import TextField from '@react-mdc/textfield';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

export const UnsealInput = ({
  value,
  onChange,
}) => {
  let input;
  return (
    <FormField>
      <div className="mdc-textfield mdc-textfield--fullwidth">
        <input id="unseal-key-input"
          className="mdc-textfield__input"
          ref={ n => input = n }
          onChange={ () => onChange(input.value) }
          value={value} />
        <label htmlFor="unseal-key-input" className="mdc-textfield__label">Unseal Key</label>
      </div>
    </FormField>
  )
}

const mapStateToProps = (state) => ({
  value: state.app.sealStatus.unsealEntryValue,
});

const mapDispatchToProps = ({
  onChange: editUnsealKey,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealInput);