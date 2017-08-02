import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StoreState from '../../types';
import Button from '@react-mdc/button';
import Card from '@react-mdc/card';
import Credentials from './credentials';
import { loginStart } from '../actions';
import '@material/button/dist/mdc.button.css';
import '@material/card/dist/mdc.card.css';

export interface Props {
  method: string;
  doLogin: (method: string) => actions.LoginStart;
  className: string;
}

const Details = ({
  method,
  doLogin,
  className,
}: Props) => (
  <Card className={className}>
    <Card.Primary>
      <Card.Title large={true}>Login to Vault.</Card.Title>
    </Card.Primary>
    <Card.SupportingText>
      <Credentials/>
    </Card.SupportingText>
    <Card.Actions>
      <Button onClick={() => doLogin(method)}>Login</Button>
    </Card.Actions>
  </Card>
);

const mapStateToProps = (state: StoreState) => ({
  method: state.app.login.method,
});

const mapDispatchToProps = {
  doLogin: loginStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);