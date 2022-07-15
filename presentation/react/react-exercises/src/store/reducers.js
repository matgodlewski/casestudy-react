import {actionTypes} from "./actions";

const initialStore = {
    posts: [],
    isPostLoading: false,

}
export const reducers = (store = initialStore, action) => {

    switch (action.type) {
        case actionTypes.FETCH_POSTS_REQUEST: {
            return {
                ...store,
                isPostLoading: false,
            }
        }
        case actionTypes.FETCH_POSTS_SUCCESS: {
            return {
                ...store,
                posts: action.payload,
                isPostLoading: false,
            }
        }
        default: {
            console.warn('Unhandled action: ' + action.type)
            return store
        }
    }
}
