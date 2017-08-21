import React from 'react';
import { connect } from 'react-redux';
import LoginChooser from './chooser';
import LoginDetails from './details';
import './login.css';

const Login = ({
  chosenMethod,
}) => (
  <div className="slider">
    <LoginChooser className={`slider--panel slider--panel__left ${!chosenMethod ? 'active' : ''}`} />
    <LoginDetails className={`slider--panel slider--panel__right ${chosenMethod ? 'active' : ''}`} />
  </div>
);

const mapStateToProps = state => ({
  chosenMethod: state.app.login.method,
});

export default connect(mapStateToProps)(Login);
