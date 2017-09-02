export const CHANGE_TOKEN = 'vault-ui/login/token/CHANGE_TOKEN';
export const changeToken = token => ({
  type: CHANGE_TOKEN,
  payload: { token },
});
