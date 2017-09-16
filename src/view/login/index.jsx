import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slide from 'material-ui/transitions/Slide';
import LoginChooser from './chooser';
import LoginDetails from './details';

function LoginComponent({
  chosenMethod,
}) {
  return (
    <div>
      <Slide direction="left" in={!chosenMethod}>
        <LoginChooser />
      </Slide>
      <Slide direction="left" in={chosenMethod}>
        <LoginDetails />
      </Slide>
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
