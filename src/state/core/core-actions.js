// @flow
import type { UnauthenticatedVault } from '../../vault-api';

export const ERROR = 'vault-ui/core/ERROR';
export type ErrorAction = {
  +type: 'vault-ui/core/ERROR',
  +payload: {
    +err: Error,
    +source: string
  }
};
export const error = (err: Error, source: string): ErrorAction => ({
  type: ERROR,
  payload: { err, source },
});

export const CLEAR_ERROR = 'vault-ui/core/CLEAR_ERROR';
export type ClearErrorAction = {
  +type: 'vault-ui/core/CLEAR_ERROR',
};
export const clearError = (): ClearErrorAction => ({
  type: CLEAR_ERROR,
});

export const INITIALISE = 'vault-ui/core/INITIALISE';
export type InitialiseAction = {
  +type: 'vault-ui/core/INITIALISE',
  +payload: {
    +vault: UnauthenticatedVault,
  },
};
export const initialise = (vault: UnauthenticatedVault): InitialiseAction => ({
  type: INITIALISE,
  payload: { vault },
});

export const HEALTH_CHECK_REQUEST = 'vault-ui/core/HEALTH_CHECK_REQUEST';
export type HealthCheckRequestAction = {
  +type: 'vault-ui/core/HEALTH_CHECK_REQUEST',
};
export const healthCheckRequest = (): HealthCheckRequestAction => ({
  type: HEALTH_CHECK_REQUEST,
});
export const HEALTH_CHECK_RESPONSE = 'vault-ui/core/HEALTH_CHECK_RESPONSE';
export type HealthCheckResponseAction = {
  +type: 'vault-ui/core/HEALTH_CHECK_RESPONSE';
  +payload: {
    +ok: boolean,
  }
}
export const healthCheckResponse = (ok: boolean): HealthCheckResponseAction => ({
  type: HEALTH_CHECK_RESPONSE,
  payload: { ok },
});

export type CoreAction =
  ErrorAction |
  ClearErrorAction |
  InitialiseAction |
  HealthCheckRequestAction |
  HealthCheckResponseAction;
