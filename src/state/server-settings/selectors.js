import { getAppState } from '../core/core-selectors';

export const getServerSettings = state => getAppState(state).serverSettings;

export default {};
