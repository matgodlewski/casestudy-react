export const APIS_DETAILS_ACTION_TYPES = {
  DETAILS_SUCCESS: '[APIS_DETAILS] DETAILS_SUCCESS',
  DETAILS_FAIL: '[APIS_DETAILS] DETAILS_FAIL',
  DETAILS_EDIT: '[APIS_DETAILS] DETAILS_EDIT',
};

export function setApiDetailsAction() {
  return (dispatch, getState) => {
    try {
      const { apis } = getState();
      dispatch({
        type: APIS_DETAILS_ACTION_TYPES.DETAILS_SUCCESS,
        payload: {
          response: apis.lastResponse,
        },
      });
    } catch (err) {
      dispatch({
        type: APIS_DETAILS_ACTION_TYPES.DETAILS_FAIL,
        payload: {
          errors: [`something went wrong: ${err}`],
        },
      });
    }
  };
}

export function updateApiDetailsEntries(entries) {
  return (dispatch) => {
    dispatch({
      type: APIS_DETAILS_ACTION_TYPES.DETAILS_EDIT,
      payload: {
        entries,
      },
    });
  };
}
