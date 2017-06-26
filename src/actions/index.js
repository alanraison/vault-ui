export const ERROR = 'ERROR';
export const error = (err, source) => ({
  type: ERROR,
  err,
  source,
});

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => ({
  type: CLEAR_ERROR,
});