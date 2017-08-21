import React from 'react';
import { connect } from 'react-redux';
import Typography from '@react-mdc/typography';
import '@material/typography/dist/mdc.typography.css';

import * as actions from '../actions';
import Page from './page';

export class App extends React.Component {
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

const mapStateToProps = state => ({
  sealed: state.app.sealStatus.sealed,
});
const mapDispatchToProps = ({
  onReady: actions.sealStatus.getUnsealStatusStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
