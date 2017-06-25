import React from 'react';
import { connect } from 'react-redux';
import { 
  getUnsealStatusStart, 
} from './seal/actions';
import IfUnsealed from './seal/components';

const Loading = () => <div>Loading...</div>
const Unsealed = () => <div>Unsealed!</div>

class App extends React.Component {
  componentDidMount() {
    if (this.props.sealed === null) {
      this.props.onReady();
    }
  }
  render() {
    if (!this.props.sealed === null) {
      return <Loading/>
    } else {
      return (
        <IfUnsealed>
          <Unsealed/>
        </IfUnsealed>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  sealed: state.app.sealStatus.serverState.sealed,
});
const mapDispatchToProps = ({
  onReady: getUnsealStatusStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);