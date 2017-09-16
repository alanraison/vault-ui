import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import { FormGroup } from 'material-ui/Form';

import AdvancedLoginOptions from './optionsform';
import LoginRouter from './router';
import { loginStart } from '../../actions/login';

class DetailsComponent extends React.Component {
  state = { advanced: false };
  
  render() {
    return (
      <Card>
        <CardHeader title="Login to Vault." />
        <CardContent>
          <FormGroup row>
            <LoginRouter />
          </FormGroup>
          <Collapse
            in={this.state.advanced}
            transitionDuration="auto"
            unmountOnExit
          >
            <CardContent>
              <AdvancedLoginOptions />
            </CardContent>
          </Collapse>
        </CardContent>
        <CardActions>
          <Button raised color="primary" onClick={() => this.props.doLogin(this.props.method)}>Login</Button>
        </CardActions>
      </Card>
    );
  }
}

DetailsComponent.propTypes = ({
  method: PropTypes.string.isRequired,
  doLogin: PropTypes.func.isRequired,
});

DetailsComponent.defaultProps = ({
});

const mapStateToProps = state => ({
  method: state.app.login.method,
});

const mapDispatchToProps = {
  doLogin: loginStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);
