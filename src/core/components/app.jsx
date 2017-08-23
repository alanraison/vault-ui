import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@react-mdc/typography';
import '@material/typography/dist/mdc.typography.css';

import * as actions from '../actions';
import Page from './page';

export class AppComponent extends React.Component {
  componentDidMount() {
    if (!this.props.connected) {
      this.props.onReady();
    }
  }
  render() {
    return (
      <Typography>
        <Page />
      </Typography>
    );
  }
}

AppComponent.propTypes = ({
  connected: PropTypes.bool,
  onReady: PropTypes.func,
});

AppComponent.defaultProps = ({
  connected: false,
  onReady: () => {},
});

const mapStateToProps = state => ({
  connected: state.app.connected,
});
const mapDispatchToProps = ({
  onReady: actions.initialise,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
