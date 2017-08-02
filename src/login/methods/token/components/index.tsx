import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import StoreState from '../../../../types';
import FormField from '@react-mdc/form-field';
import TextField from '@react-mdc/textfield';
import { changeToken } from '../actions';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

export interface Props {
  value: string;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => Action;
}

export const TokenEntry: React.SFC<Props> = ({
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

const mapStateToProps = (state: StoreState) => ({
  value: state.app.login.tokenEntry,
});

const mapDispatchToProps = {
  onChange: changeToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenEntry);