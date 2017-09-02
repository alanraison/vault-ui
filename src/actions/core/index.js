export const ERROR = 'vault-ui/core/ERROR';
export const error = (err, source) => ({
  type: ERROR,
  payload: { err, source },
});

export const CLEAR_ERROR = 'vault-ui/core/CLEAR_ERROR';
export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const INITIALISE = 'vault-ui/core/INITIALISE';
export const initialise = vault => ({
  type: INITIALISE,
  payload: { vault },
});

export const HEALTH_CHECK_REQUEST = 'vault-ui/core/HEALTH_CHECK_REQUEST';
export const healthCheckRequest = () => ({
  type: HEALTH_CHECK_REQUEST,
});
export const HEALTH_CHECK_RESPONSE = 'vault-ui/core/HEALTH_CHECK_RESPONSE';
export const healthCheckResponse = () => ({
  type: HEALTH_CHECK_RESPONSE,
});
