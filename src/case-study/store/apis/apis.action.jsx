import { fetchPublicApis } from "../../service/rest.service";

export function fetchAllApisAction() {
    return (dispatch) => {
        dispatch({ type: APIS_ACTION_TYPES.FETCH_REQUEST })
        fetchPublicApis()
            .then(response => {
                dispatch({
                    type: APIS_ACTION_TYPES.FETCH_SUCCESS,
                    payload: {
                        response,
                    }
                })
            })
            .catch((err) => {
                dispatch({
                    type: APIS_ACTION_TYPES.FETCH_FAIL,
                    payload: {
                        errors: [`something went wrong: ${err}`],
                    }
                })
            })
    }
}

// implement fetch all based on async await
export function asyncFetchAllApisAction() {
    return async (dispatch) => {
        // start here
    }
}

export const APIS_ACTION_TYPES = {
    FETCH_REQUEST : '[APIS] FETCH_REQUEST',
    FETCH_SUCCESS : '[APIS] FETCH_SUCCESS',
    FETCH_FAIL : '[APIS] FETCH_FAIL',
}
