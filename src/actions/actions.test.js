import * as Actions from './action'
import { createMockStore } from 'redux-test-utils'

const initialState = {
  cards: [],
  error: {}
}

describe('Actions', () => {
  let store = createMockStore(initialState)

  const getActions = async action => {
    const actions = store.getActions()
    await store.dispatch(action)
    return actions
  }

  beforeEach(() => {
    const initialState = {}
    store = createMockStore(initialState)
  })

  describe('Actions', () => {
    it('fetches cards with Success', async () => {
      const action = Actions.fetchCardsSuccess()
      const actions = await getActions(action)
      expect(actions[0].type).toEqual('FETCH_CARDS_SUCCESS')
    })

    it('fetches Error', async () => {
      const action = Actions.fetchCardsError()
      const actions = await getActions(action)
      expect(actions[0].type).toEqual('FETCH_CARDS_ERROR')
    })
  })
})
