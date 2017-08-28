import actions from '../../../actions';

const initialState = {
  sealed: null,
  sealInfo: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.sealStatus.GET_UNSEAL_STATUS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.sealStatus.GET_UNSEAL_STATUS_RESULT:
      return {
        ...state,
        sealInfo: action.payload,
        loading: false,
      };
    case actions.ERROR:
      return {
        ...state,
        loading: false,
      };
    case actions.sealStatus.UNSEAL_KEY_REQUIRED:
      return {
        ...state,
        sealed: true,
      };
    case actions.unseal.UNSEAL_COMPLETE:
      return {
        ...state,
        sealed: false,
      };
    default:
      return state;
  }
};
