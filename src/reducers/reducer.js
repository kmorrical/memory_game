import {FETCH_POSTS_LOADING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR} from '../actions/action';

const initialState = {
  loading: false,
  posts: [],
  userPosts: [],
  myPosts: [],
  error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
     case FETCH_POSTS_LOADING:
      return {
        ...state,
        loading: true
      }
      case FETCH_POSTS_SUCCESS:
        const userPosts = action.posts.filter(function (item) {
          return item.userId !== 1;
        });
        const myPosts = action.posts.filter(function (item) {
          return item.userId === 1;
        });
        return {
          ...state,
          loading: false,
          posts: action.posts,
          userPosts: userPosts,
          myPosts: myPosts
        }
      case FETCH_POSTS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.error
        }
     default:
      return state
    }
  }

