import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'material-ui/Form';

import LoginRouter from './router';
import Policies from './policies';

export function LoginOptionsForm({
  value,
}) {
  return (
    <div>
      <FormGroup row>
        <LoginRouter />
      </FormGroup>
      <FormGroup row>
        <Policies />
      </FormGroup>
    </div>
  );
}

LoginOptionsForm.propTypes = ({
  value: PropTypes.string.isRequired,
});

const mapStateToProps = (state) => ({
  value: '',
});

export default connect(mapStateToProps)(LoginOptionsForm);
