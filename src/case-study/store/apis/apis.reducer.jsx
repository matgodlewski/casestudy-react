import { APIS_ACTION_TYPES } from './apis.action';

const initialState = {
  lastResponse: undefined,
  fetchingInProgress: false,
  errors: [],
};

export default function apis(state=initialState, action) {
  switch (action.type) {
    case APIS_ACTION_TYPES.FETCH_REQUEST:
      return {
        ...state,
        lastResponse: undefined,
        errors: [],
        fetchingInProgress: true,
      };
    case APIS_ACTION_TYPES.FETCH_SUCCESS:
      const { response } = action.payload;
      return {
        ...state,
        lastResponse: response,
        fetchingInProgress: false,
      };
    case APIS_ACTION_TYPES.FETCH_FAIL:
      const { errors } = action.payload;
      return {
        ...state,
        errors,
        lastResponse: undefined,
        fetchingInProgress: false,
      };
    default:
      return state;
  }
}
