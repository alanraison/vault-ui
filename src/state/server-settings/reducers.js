// @flow
import * as actions from './actions';

export type ServerSettingsState = {
  loading?: boolean,
};

export const initialState = {};

export default (
  state: ServerSettingsState = initialState,
  action: actions.ServerSettingsAction,
) => {
  switch (action.type) {
    case actions.OPEN_SETTINGS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
