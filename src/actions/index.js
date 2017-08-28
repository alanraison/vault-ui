import * as core from './core';
import * as authMethods from './authMethods';
import * as login from './login';
import * as sealStatus from './sealStatus';
import * as unseal from './unseal';

export default {
  ...core,
  authMethods,
  login,
  sealStatus,
  unseal,
};
