import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { CardHeader, CardActions, CardContent } from 'material-ui/Card';
import Slide from 'material-ui/transitions/Slide';
import Collapse from 'material-ui/transitions/Collapse';
import ViewCard from '../core/view-card';
import Chooser from './chooser';
import AdvancedLoginOptions from './advanced-login-options';
import methods from './methods';
import { getLogin } from '../../state/login/selectors';
import { loginStart } from '../../state/login/actions';

export function LoginComponent({
  method,
  loginData,
  onClick,
}) {
  return (
    <ViewCard>
      <CardHeader title="Login to Vault." />
      <CardContent>
        <Slide in={!method} transitionAppear={false} direction="right" unmountOnExit>
          <Chooser />
        </Slide>
        <Slide in={!!method} direction="left" unmountOnExit>
          <div>
            {
              method
              ? React.createElement(methods[method])
              : null
            }
            <Collapse>
              <AdvancedLoginOptions />
            </Collapse>
          </div>
        </Slide>
      </CardContent>
      <Collapse in={!!method}>
        <CardActions>
          <Button color="primary" raised onClick={() => onClick({ method, loginData })}>
            Log in
          </Button>
        </CardActions>
      </Collapse>
    </ViewCard>
  );
}

LoginComponent.propTypes = {
  method: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // eslint-disable-next-line react/forbid-prop-types
  loginData: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

LoginComponent.defaultProps = {
  method: false,
  loginData: {},
};

const mapStateToProps = state => ({
  method: getLogin(state).method,
  loginData: getLogin(state)[getLogin(state).method],
});

const mapDispatchToProps = {
  onClick: loginStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
