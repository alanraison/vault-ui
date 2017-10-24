export const OPEN_SETTINGS = 'vault-ui/admin/OPEN_SETTINGS';
export const openSettings = () => ({
  type: OPEN_SETTINGS,
});
export const ENABLE_LOGIN_METHOD = 'vault-ui/admin/ENABLE_LOGIN_METHOD';
export const enableLoginMethod = method => ({
  type: ENABLE_LOGIN_METHOD,
  payload: {
    method,
  },
});
