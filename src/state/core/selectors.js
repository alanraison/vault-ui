export const getAppState = state => state.app;
export const getConnected = state => getAppState(state).connected;
export const getError = state => getAppState(state).error;
export const getVault = state => getAppState(state).vault;
