import React from 'react';
import { connect } from 'react-redux';
import Button from '@react-mdc/button';
import Card from '@react-mdc/card';
import '@material/button/dist/mdc.button.css';
import '@material/card/dist/mdc.card.css';

import Credentials from './credentials';
import { loginStart } from '../actions';

const Details = ({
  method,
  doLogin,
  className,
}) => (
  <Card className={className}>
    <Card.Primary>
      <Card.Title large>Login to Vault.</Card.Title>
    </Card.Primary>
    <Card.SupportingText>
      <Credentials />
    </Card.SupportingText>
    <Card.Actions>
      <Button onClick={() => doLogin(method)}>Login</Button>
    </Card.Actions>
  </Card>
);

const mapStateToProps = state => ({
  method: state.app.login.method,
});

const mapDispatchToProps = {
  doLogin: loginStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);