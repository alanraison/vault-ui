import * as React from 'react';
import { connect } from 'react-redux';
import StoreState from '../../types';
import TokenCredentials from '../methods/token/components';

export interface Props {
  method: string;
}

const Credentials: React.SFC<Props> = ({
  method,
}) => {
  switch (method) {
    case 'token':
      return <TokenCredentials/>;
    default:
      return null;
  }
};

const mapStateToProps = (state: StoreState) => ({
  method: state.app.login.method,
});

export default connect(mapStateToProps)(Credentials);