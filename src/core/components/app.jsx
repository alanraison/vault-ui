import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@react-mdc/typography';
import '@material/typography/dist/mdc.typography.css';

import * as actions from '../actions';
import Page from './page';

export class AppComponent extends React.Component {
  componentDidMount() {
    if (this.props.sealed === null) {
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
  sealed: PropTypes.boolean,
  onReady: PropTypes.func,
});

AppComponent.defaultProps = ({
  sealed: null,
  onReady: () => {},
});

const mapStateToProps = state => ({
  sealed: state.app.sealStatus.sealed,
});
const mapDispatchToProps = ({
  onReady: actions.sealStatus.getUnsealStatusStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
