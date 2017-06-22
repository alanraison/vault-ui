import React from 'react';
import {
  connect,
} from 'react-redux';
import { 
  getUnsealStatusStart, 
} from './unseal/actions';

const Loading = () => <div>Loading...</div>
const Unseal = () => <div>Unseal!</div>
const Unsealed = () => <div>Unsealed!</div>

class App extends React.Component {
  componentDidMount() {
    if (!this.props.sealStatus) {
      this.props.onReady();
    }
  }
  render() {
    if (!this.props.sealStatus) {
      return <Loading/>
    } else if (this.props.sealStatus.sealed) {
      return <Unseal/>
    } else {
      return <Unsealed/>
    }
  }
}

const mapStateToProps = (state) => ({
  sealStatus: state.app.seal,
});
const mapDispatchToProps = ({
  onReady: getUnsealStatusStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);