import reducer from './reducer';
import {FETCH_POSTS_LOADING, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR} from '../actions/action';

const mockState = {
    loading: false,
    posts: [],
    userPosts: [],
    myPosts: [],
    error: null
  }
  
  describe('my reducer', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('tests fetch posts success', () => {
      const action = {
        type: FETCH_POSTS_SUCCESS,
        posts: [{userId: 1, title: "hello"}, {userId: 2, title: "aloha"}]
      };
  
      expect(reducer(mockState, action)).toEqual({
        ...mockState,
        posts: [{userId: 1, title: "hello"}, {userId: 2, title: "aloha"}],
        myPosts: [{userId: 1, title: "hello"}],
        userPosts: [{userId: 2, title: "aloha"}]
      });
    });
  
    it('tests fetch posts loading', () => {
      const action = {
        type: FETCH_POSTS_LOADING,
        loading: true
      };
  
      expect(reducer(mockState, action)).toEqual({
        ...mockState,
        loading: true
      });
    });
  
    it('tests fetch posts error', () => {
      const action = {
        type: FETCH_POSTS_ERROR,
        error: "doesn't work"
      };
  
      expect(reducer(mockState, action)).toEqual({
        ...mockState,
        error: "doesn't work"
      });
    });

    it('default returns state', () => {
        const action = {};
        expect(reducer(mockState, action)).toEqual({
          ...mockState,
        });
      });
  });
  