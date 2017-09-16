import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'material-ui/Form';

import Policies from './policies';

export function AdvancedLoginOptionsForm({
  // value,
}) {
  return (
    <div>
      <FormGroup row>
        <Policies />
      </FormGroup>
    </div>
  );
}

AdvancedLoginOptionsForm.propTypes = ({
  // value: PropTypes.string.isRequired,
});

const mapStateToProps = (state) => ({
  // value: '',
});

export default connect(mapStateToProps)(AdvancedLoginOptionsForm);
