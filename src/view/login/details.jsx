import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';

import LoginRouter from './router';
import { loginStart } from '../../actions/login';

function DetailsComponent({
  method,
  doLogin,
  className,
}) {
  return (
    <Card className={className}>
      <CardHeader title="Login to Vault." />
      <CardContent>
        <LoginRouter />
      </CardContent>
      <CardActions>
        <Button onClick={() => doLogin(method)}>Login</Button>
      </CardActions>
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
