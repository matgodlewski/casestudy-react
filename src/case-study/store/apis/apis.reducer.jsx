import { APIS_ACTION_TYPES } from './apis.action';

const initialState = {
  lastResponse: undefined,
  fetchingInProgress: false,
  errors: [],
};

// eslint-disable-next-line default-param-last
export default function apis(state= initialState, action) {
  switch (action.type) {
    case APIS_ACTION_TYPES.FETCH_REQUEST:
      return {
        ...state,
        lastResponse: undefined,
        errors: [],
        fetchingInProgress: true,
      };

    case APIS_ACTION_TYPES.FETCH_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        lastResponse: response,
        allApisDevsCategory: response.entries,
        fetchingInProgress: false,
      };
    }

    case APIS_ACTION_TYPES.FETCH_FAIL: {
      const { errors } = action.payload;
      return {
        ...state,
        errors,
        lastResponse: undefined,
        allApisDevsCategory: [],
        fetchingInProgress: false,
      };
    }

    case APIS_ACTION_TYPES.UPDATE_DESCRIPTION: {
      const { index, description } = action.payload;
      const { lastResponse } = state;
      const newEntries = lastResponse.entries.map((entry, i) => {
        if (i === index) {
          return {
            ...entry,
            description,
          };
        }
        return entry;
      });
      return {
        ...state,
        lastResponse: {
          ...lastResponse,
          entries: newEntries,
        },
      };
    }

    case APIS_ACTION_TYPES.SET_LOCAL_APIS: {
      return {
        ...state,
        allApisDevsCategory: action.payload,
      };
    }

    case APIS_ACTION_TYPES.DELETE_ROW: {
      const { index } = action.payload;
      const { lastResponse } = state;
      const newEntries = lastResponse.entries.filter((entry, i) => i !== index);
      return {
        ...state,
        lastResponse: {
          ...lastResponse,
          entries: newEntries,
        },
      };
    }

    default:
      return state;
  }
}
