export const ERROR = 'ERROR';
export const error = (err, source) => ({
  type: ERROR,
  payload: { err, source },
});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const INITIALISE = 'INITIALISE';
export const initialise = () => ({
  type: INITIALISE,
});

export const HEALTH_CHECK_START = 'HEALTH_CHECK_START';
export const healthCheckStart = () => ({
  type: HEALTH_CHECK_START,
});
export const HEALTH_CHECK_OK = 'HEALTH_CHECK_OK';
export const healthCheckOk = () => ({
  type: HEALTH_CHECK_OK,
});
