import * as admin from './admin';
import * as core from './core';
import * as methods from './methods';
import * as login from './login';
import * as sealStatus from './seal-status';
import * as serverSettings from './server-settings';

const HOME = 'vault-ui/HOME';
const home = () => ({
  type: HOME,
});

export default {
  HOME,
  home,
  admin,
  ...core,
  methods,
  login,
  sealStatus,
  serverSettings,
};
