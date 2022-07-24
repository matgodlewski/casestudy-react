import { APIS_DETAILS_ACTION_TYPES } from './apisDetails.action';

const initialState = {
  allApisInDevsCategory: [],
};

// eslint-disable-next-line default-param-last
export default function apisDetails(state= initialState, action) {
  switch (action.type) {
    case APIS_DETAILS_ACTION_TYPES.DETAILS_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        allApisInDevsCategory: response.entries,
      };
    }

    case APIS_DETAILS_ACTION_TYPES.DETAILS_FAIL: {
      const { errors } = action.payload;
      return {
        ...state,
        errors,
      };
    }

    case APIS_DETAILS_ACTION_TYPES.DETAILS_EDIT: {
      const { entries } = action.payload;
      return {
        ...state,
        allApisInDevsCategory: entries,
      };
    }

    default:
      return state;
  }
}
