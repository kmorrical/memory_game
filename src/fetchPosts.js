import {
  fetchPostsLoading,
  fetchPostsSuccess,
  fetchPostsError
} from './actions/action'

export function fetchPosts () {
  return dispatch => {
    dispatch(fetchPostsLoading())
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        dispatch(fetchPostsSuccess(res))
        return res.json
      })
      .catch(error => {
        dispatch(fetchPostsError(error))
      })
  }
}

export default fetchPosts;
