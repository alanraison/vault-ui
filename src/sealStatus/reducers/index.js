import * as actions from '..//actions';

const initialState = {
  sealed: null,
  sealInfo: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_UNSEAL_STATUS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_UNSEAL_STATUS_RESULT:
      return {
        ...state,
        sealInfo: action.data,
        loading: false,
      };
    case actions.ERROR:
      return {
        ...state,
        loading: false,
      };
    case actions.UNSEAL_KEY_REQUIRED:
      return {
        ...state,
        sealed: true,
      };
    case actions.UNSEAL_COMPLETE:
      return {
        ...state,
        sealed: false,
      };
    default:
      return state;
  }
};
