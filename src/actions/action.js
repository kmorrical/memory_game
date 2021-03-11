export const FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

export function fetchPostsLoading () {
  return {
    type: FETCH_POSTS_LOADING,
    loading: true
  }
}

export function fetchPostsSuccess (posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts: posts
  }
}

export function fetchPostsError (error) {
  return {
    type: FETCH_POSTS_ERROR,
    error: error
  }
}
