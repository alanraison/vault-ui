import actions from '../../actions';

const initialState = {
  sealed: null,
  sealInfo: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.sealStatus.UNSEAL_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.sealStatus.UNSEAL_STATUS_RESPONSE:
      return {
        ...state,
        sealInfo: action.payload.status,
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
    case actions.sealStatus.UNSEAL_COMPLETE:
      return {
        ...state,
        sealed: false,
      };
    default:
      return state;
  }
};
