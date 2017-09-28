import * as admin from './admin';
import * as core from './core';
import * as methods from './methods';
import * as login from './login';
import * as sealStatus from './sealStatus';
import * as serverSettings from './serverSettings';

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
