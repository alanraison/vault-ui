import * as actions from '../actions';

export interface StoreState {
  sealed: boolean | null;
  loading: boolean | null;
}

const initialState: StoreState = {
  sealed: null,
  loading: false,
};

export default (
  state: StoreState = initialState, 
  action: actions.SealStatusAction | actions.ErrorAction
): StoreState => {
  switch (action.type) {
    case actions.GET_UNSEAL_STATUS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.UNSEAL_STATUS_UPDATED:
      return {
        ...action.data,
        loading: false,
      };
    case actions.ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
