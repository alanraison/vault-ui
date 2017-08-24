import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@react-mdc/button';
import '@material/button/dist/mdc.button.css';

import { startUnseal } from '../actions';

export function UnsealButtonComponent({
  unsealKey,
  onClick,
}) {
  return (
    <Button onClick={() => onClick(unsealKey)}>Unseal</Button>
  );
}

UnsealButtonComponent.propTypes = ({
  unsealKey: PropTypes.string.isRequired,
  onClick: PropTypes.func,
});

UnsealButtonComponent.defaultProps = ({
  onClick: () => {},
});

const mapStateToProps = state => ({
  unsealKey: state.app.unseal,
});

const mapDispatchToProps = ({
  onClick: startUnseal,
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsealButtonComponent);
