import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormField from '@react-mdc/form-field';
import TextField from '@react-mdc/textfield';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/textfield/dist/mdc.textfield.css';

import { editUnsealKey } from '../actions';

export function UnsealInputComponent({
  value,
  onChange,
}) {
  return (
    <FormField>
      <TextField id="unseal-key-input" fullwidth>
        <TextField.Input
          onChange={e => onChange(e.target.value)}
          value={value}
        />
        <TextField.Label htmlFor="unseal-key-input">Unseal Key</TextField.Label>
      </TextField>
    </FormField>
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
