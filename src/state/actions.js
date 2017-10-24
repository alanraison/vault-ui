import * as methods from './login/methods/actions';
import * as login from './login/actions';
import * as sealStatus from './seal-status/actions';
import * as serverSettings from './server-settings/actions';

export * from './core/actions';
export const HOME = 'vault-ui/HOME';
export const home = () => ({
  type: HOME,
});

export {
  methods,
  login,
  sealStatus,
  serverSettings,
};
