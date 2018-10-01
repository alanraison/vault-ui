import { getAppState } from '../core/core-selectors';

export const getSealStatus = state => getAppState(state).sealStatus;
export const getUnsealKey = state => getSealStatus(state).unsealKey;
