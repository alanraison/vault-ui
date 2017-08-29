import actions from '../../actions';

const initialState = {
  sealed: null,
  sealInfo: null,
  loading: false,
  unsealKey: '',
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
    case actions.sealStatus.EDIT_UNSEAL_KEY:
      return {
        ...state,
        unsealKey: action.payload.key,
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
