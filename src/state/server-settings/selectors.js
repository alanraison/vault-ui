import { getAppState } from '../core/selectors';

export const getServerSettings = state => getAppState(state).serverSettings;

export default {};
