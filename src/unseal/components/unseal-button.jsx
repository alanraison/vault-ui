import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@react-mdc/button';
import '@material/button/dist/mdc.button.css';

import { startUnseal } from '../actions';

export const PlainUnsealButton = ({
  unsealKey,
  onClick,
}) => (
  <Button onClick={() => onClick(unsealKey)}>Unseal</Button>
);

PlainUnsealButton.propTypes = ({
  unsealKey: PropTypes.string.isRequired,
  onClick: PropTypes.func,
});

PlainUnsealButton.defaultProps = ({
  onClick: () => {},
});

const mapStateToProps = state => ({
  unsealKey: state.app.unseal,
});

const mapDispatchToProps = ({
  onClick: startUnseal,
});

export default connect(mapStateToProps, mapDispatchToProps)(PlainUnsealButton);
