import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'material-ui/Form';
import TextField from 'material-ui/TextField';

export default () => (
  <div>
    <FormGroup row>
      <TextField id="username" />
    </FormGroup>
  </div>
);
