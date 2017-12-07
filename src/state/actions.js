// @flow
import * as core from './core/actions';
import * as login from './login/actions';
import * as sealStatus from './seal-status/actions';
import * as serverSettings from './server-settings/actions';

export * from './core/actions';

export type HomeAction = {
  +type: 'vault-ui/HOME',
};
export const HOME = 'vault-ui/HOME';
export const home = (): HomeAction => ({
  type: 'vault-ui/HOME',
});

export const DEBUG = 'vault-ui/core/debug';
export type DebugAction = {
  +type: 'vault-ui/core/debug',
  +payload: any,
};
export const debug = (payload: any): DebugAction => ({
  type: DEBUG,
  payload,
});

export type Action =
  HomeAction |
  core.CoreAction |
  login.LoginAction |
  sealStatus.SealStatusAction |
  serverSettings.ServerSettingsAction;

export {
  login,
  sealStatus,
  serverSettings,
};
