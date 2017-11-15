import * as actions from '../actions';
import * as core from './sagas';
import * as sealStatus from '../seal-status/sagas';
// import * as workspace from '../workspace/sagas';
import * as login from '../login/sagas';

export default ({
  [actions.INITIALISE]: core.initialise,
  [actions.sealStatus.UNSEAL_STATUS_REQUEST]: sealStatus.callGetSealStatus,
  [actions.sealStatus.UNSEAL_STATUS_RESPONSE]: sealStatus.isSealed,
  [actions.sealStatus.UNSEAL_REQUEST]: sealStatus.callUnseal,
  [actions.sealStatus.UNSEAL_COMPLETE]: login.startLogin,
  [actions.login.LOGIN_START]: login.login,
  // [actions.login.LOGIN_SUCCESS]: workspace.initialise,
  [actions.DEBUG]: core.debug,
});
