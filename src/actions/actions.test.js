import * as Actions from './action'
import { createMockStore } from 'redux-test-utils'
import thunk from 'redux-thunk'

const mockStore = createMockStore([thunk])

const initialState = {
  posts: [],
  loading: false,
  error: {},
  myPosts: [],
  userPosts: []
}

describe('Actions', () => {
  let store = createMockStore(initialState);

  const getActions = async action => {
    const actions = store.getActions();
    await store.dispatch(action);
    return actions;
  }

  beforeEach(() => {
    const initialState = {};
    store = createMockStore(initialState);
  })

  describe('Actions', () => {
    it('fetches posts Loading', async () => {
      const action = Actions.fetchPostsLoading();
      const actions = await getActions(action);
      expect(actions[0].type).toEqual('FETCH_POSTS_LOADING');
    })

    it('fetches posts with Success', async () => {
      const action = Actions.fetchPostsSuccess();
      const actions = await getActions(action);
      expect(actions[0].type).toEqual('FETCH_POSTS_SUCCESS');
    })

    it('fetches Error', async () => {
      const action = Actions.fetchPostsError();
      const actions = await getActions(action);
      expect(actions[0].type).toEqual('FETCH_POSTS_ERROR');
    })
  })
})
