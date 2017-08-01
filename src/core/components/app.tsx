import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Page from './page';
import Typography from '@react-mdc/typography';
import '@material/typography/dist/mdc.typography.css';

export interface Props {
  sealed?: boolean;
  onReady: () => void;
}

export class App extends React.Component<Props> {
  componentDidMount() {
    if (this.props.sealed === null) {
      this.props.onReady();
    }
  }
  render() {
    return (
      <Typography>
        <Page/>
      </Typography>
    );
  }
}

const mapStateToProps = (state: object) => ({
  sealed: state.app.sealStatus.sealed,
});
const mapDispatchToProps = ({
  onReady: actions.sealStatus.getUnsealStatusStart,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);