// @flow
import type { State } from '../reducers';
import type { AppState } from './reducers';

export const getAppState = (state: State): AppState => state.app;
export const getConnected = (state: State) => getAppState(state).connected;
export const getError = (state: State) => getAppState(state).error;
export const getVault = (state: State) => getAppState(state).vault;
