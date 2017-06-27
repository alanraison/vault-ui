import React from 'react';
import { connect } from 'react-redux';
import {
  getUnsealStatusStart,
} from './sealStatus/actions';
import {
  Page,
} from './components';

export class App extends React.Component {
  componentDidMount() {
    if (this.props.sealed === null) {
      this.props.onReady();
    }
  }
  render() {
    return (
      <Page/>
    );
  }
}

const mapStateToProps = (state) => ({
  sealed: state.app.sealStatus.sealed,
});
const mapDispatchToProps = ({
  onReady: getUnsealStatusStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);