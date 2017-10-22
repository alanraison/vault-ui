export const SETTINGS = 'vault-ui/admin/SETTINGS';
export const settings = () => ({
  type: SETTINGS,
});
export const ENABLE_LOGIN_METHOD = 'vault-ui/admin/ENABLE_LOGIN_METHOD';
export const enableLoginMethod = method => ({
  type: ENABLE_LOGIN_METHOD,
  payload: {
    method,
  },
});
