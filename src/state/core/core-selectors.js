// @flow
import type { State } from '../reducers';
import type { UnauthenticatedVault } from '../../vault-api';
import type { AppState, ErrorState } from './core-reducers';

export const getAppState = (state: State): AppState => state.app;
export const getServerState = (state: State) => getAppState(state).server;
export const getConnected = (state: State): boolean => getServerState(state).connected;
export const getError = (state: State): null | ErrorState => getAppState(state).error;
export const getVault = (state: State): null | UnauthenticatedVault => getAppState(state).vault;
