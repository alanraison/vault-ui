import React from 'react';
import { connect } from 'react-redux';
import {
  getUnsealStatusStart,
} from './seal/actions';
import {
  Page,
  Error,
  Loading,
} from './components';
import IfUnsealed from './seal/components';

const Unsealed = () => <div>Unsealed!</div>

export class App extends React.Component {
  componentDidMount() {
    if (this.props.sealed === null) {
      this.props.onReady();
    }
  }
  render() {
    let content;
    if (this.props.sealed === null) {
      content = <Loading />
    } else if (this.props.error) {
      content = <Error/>
    } else {
      content = (
        <IfUnsealed>
          <Unsealed/>
        </IfUnsealed>
      );
    }
    return (
      <Page>
        {content}
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  sealed: state.app.sealStatus.serverState.sealed,
  error: state.app.error,
});
const mapDispatchToProps = ({
  onReady: getUnsealStatusStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);