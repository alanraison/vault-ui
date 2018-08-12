import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

export default () => (
  <div>
    <FormGroup row>
      <TextField id="username" />
    </FormGroup>
  </div>
);
