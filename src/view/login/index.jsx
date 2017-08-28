import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginChooser from './chooser';
import LoginDetails from './details';
import './login.css';

function LoginComponent({
  chosenMethod,
}) {
  return (
    <div className="slider">
      <LoginChooser className={`slider--panel slider--panel__left ${!chosenMethod ? 'active' : ''}`} />
      <LoginDetails className={`slider--panel slider--panel__right ${chosenMethod ? 'active' : ''}`} />
    </div>
  );
}

LoginComponent.propTypes = ({
  chosenMethod: PropTypes.string,
});

LoginComponent.defaultProps = ({
  chosenMethod: '',
});

const mapStateToProps = state => ({
  chosenMethod: state.app.login.method,
});

export default connect(mapStateToProps)(LoginComponent);
