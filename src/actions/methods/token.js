export const CHANGE_TOKEN = 'CHANGE_TOKEN';
export const changeToken = token => ({
  type: CHANGE_TOKEN,
  payload: { token },
});
