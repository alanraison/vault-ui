import * as actions from '../../core/actions';

const initialState = {
  sealed: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.sealStatus.GET_UNSEAL_STATUS_START:
      return {
        ...state,
        loading: true,
      };
    case actions.sealStatus.UNSEAL_STATUS_UPDATED:
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
