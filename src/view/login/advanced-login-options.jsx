import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'material-ui/Form';

import Policies from './policies';

export function AdvancedLoginOptionsComponent() {
  return (
    <div>
      <FormGroup row>
        <Policies />
      </FormGroup>
    </div>
  );
}

AdvancedLoginOptionsComponent.propTypes = ({
});

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(AdvancedLoginOptionsComponent);
