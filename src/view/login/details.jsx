import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@react-mdc/button';
import Card from '@react-mdc/card';
import '@material/button/dist/mdc.button.css';
import '@material/card/dist/mdc.card.css';

import LoginRouter from './router';
import { loginStart } from '../../actions/login';

function DetailsComponent({
  method,
  doLogin,
  className,
}) {
  return (
    <Card className={className}>
      <Card.Primary>
        <Card.Title large>Login to Vault.</Card.Title>
      </Card.Primary>
      <Card.SupportingText>
        <LoginRouter />
      </Card.SupportingText>
      <Card.Actions>
        <Button onClick={() => doLogin(method)}>Login</Button>
      </Card.Actions>
    </Card>
  );
}

DetailsComponent.propTypes = ({
  method: PropTypes.string.isRequired,
  doLogin: PropTypes.func.isRequired,
  className: PropTypes.string,
});

DetailsComponent.defaultProps = ({
  className: undefined,
});

const mapStateToProps = state => ({
  method: state.app.login.method,
});

const mapDispatchToProps = {
  doLogin: loginStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);
