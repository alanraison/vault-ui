import React from 'react';
import { connect } from 'react-redux';
import Unseal from '../unseal/components';

const IfUnsealed = ({
  sealed,
  children,
}) => {
  if (sealed) {
    return <Unseal />;
  } else {
    return children;
  }
}

const mapStateToProps = (state) => ({
  sealed: state.app.sealStatus.serverState.sealed,
});

export default connect(mapStateToProps)(IfUnsealed);