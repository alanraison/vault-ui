import React from 'react';
import { connect } from 'react-redux';

const UnsealCount = ({
  count,
}) => (
  <div>
    {count}
  </div>
);

const mapStateToProps = (state) => ({
  count: state.app.sealStatus.serverState.t - state.app.sealStatus.serverState.progress,
});

export default connect(mapStateToProps)(UnsealCount);