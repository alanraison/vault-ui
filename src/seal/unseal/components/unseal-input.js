import React from 'react';
import { connect } from 'react-redux';
import { editUnsealKey } from '../actions'

const UnsealInput = ({
  value,
  onChange,
}) => {
  let input;
  return (
    <div>
      <input id="unseal-key-input"
          ref={ n => input = n }
          onChange={ () => onChange(input.value) }
          value={value} />
      <label htmlFor="unseal-key-input">Unseal Key</label>
    </div>
  )
}

const mapStateToProps = (state) => ({
  value: state.app.sealStatus.unsealEntryValue,
});

const mapDispatchToProps = ({
  onChange: editUnsealKey,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealInput);