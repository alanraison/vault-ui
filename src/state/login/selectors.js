import { getAppState } from '../core/selectors';

export const getLogin = state => getAppState(state).login;

export default {};
