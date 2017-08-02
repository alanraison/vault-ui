import * as React from 'react';
import { connect } from 'react-redux';
import LoginChooser from './chooser';
import LoginDetails from './details';
import StoreState from '../../types';
import './login.css';

export interface Props {
  chosenMethod: string;
}

const Login = ({
  chosenMethod,
}: Props) => (
  <div className="slider">
    <LoginChooser className={`slider--panel slider--panel__left ${!chosenMethod ? "active" : ""}`}/>
    <LoginDetails className={`slider--panel slider--panel__right ${chosenMethod ? "active" : ""}`}/>
  </div>
)

const mapStateToProps = (state: StoreState) => ({
  chosenMethod: state.app.login.method,
});

export default connect(mapStateToProps)(Login);