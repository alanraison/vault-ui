import { getAppState } from '../../core/core-selectors';

export const getLogin = state => getAppState(state).login;

export default {};
