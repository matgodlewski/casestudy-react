export const actionTypes = {
    FETCH_POSTS_REQUEST: "FETCH_POSTS_REQUEST",
    FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_FAILED: "FETCH_POSTS_FAILED",
}

export const postFetchRequestAction = () => ({
  type: actionTypes.FETCH_POSTS_REQUEST,
})
export const postFetchSuccess = (posts) => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: posts
})
