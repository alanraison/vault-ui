import * as core from './core';
import * as methods from './methods';
import * as login from './login';
import * as sealStatus from './sealStatus';

export default {
  HOME: 'HOME',
  ...core,
  methods,
  login,
  sealStatus,
};
