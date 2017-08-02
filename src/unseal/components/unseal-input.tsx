import * as React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import StoreState from '../../types';
import { editUnsealKey } from '../actions'
import FormField from '@react-mdc/form-field';
import TextField from '@react-mdc/textfield';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

export interface Props {
  value: string;
  onChange: (e: React.SyntheticEvent<any>) => Action
}

export const UnsealInput = ({
  value,
  onChange,
}: Props) => (
  <FormField>
    <TextField fullwidth>
      <TextField.Input
        onChange={ (e) => onChange(e.target.value) }
        value={value} />
      <TextField.Label htmlFor="unseal-key-input">Unseal Key</TextField.Label>
    </TextField>
  </FormField>
)

const mapStateToProps = (state: StoreState) => ({
  value: state.app.sealStatus.unsealEntryValue,
});

const mapDispatchToProps = ({
  onChange: editUnsealKey,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealInput);