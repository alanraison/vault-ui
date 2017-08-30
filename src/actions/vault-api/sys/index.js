export const API_GET_MOUNTS_START = 'api/GET_MOUNTS_START';
export const getMountsStart = () => ({
  type: API_GET_MOUNTS_START,
});
export const API_GET_MOUNTS_RESULT = 'api/GET_MOUNTS_RESULT';
export const getMountsResult = payload => ({
  type: API_GET_MOUNTS_RESULT,
  payload,
});
