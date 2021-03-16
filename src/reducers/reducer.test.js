import reducer from './reducer'
import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  MATCH_CARDS
} from '../actions/action'

const mockState = {
  cards: [],
  error: null,
  matchedPairs: 0
}

const mockState2 = {
  cards: [
    { code: '5S', isMatched: false },
    { code: 'KS', isMatched: false }
  ],
  error: null,
  matchedPairs: 0
}

describe('my reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('tests fetch cards success', () => {
    const action = {
      type: FETCH_CARDS_SUCCESS,
      cards: [{ code: '5S' }, { code: 'KS' }]
    }

    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      cards: [{ code: '5S' }, { code: 'KS' }]
    })
  })

  it('tests fetch cards error', () => {
    const action = {
      type: FETCH_CARDS_ERROR,
      error: "doesn't work"
    }

    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      error: "doesn't work"
    })
  })

  it('tests match cards', () => {
    const action = {
      type: MATCH_CARDS,
      id1: '0',
      id2: '1'
    }

    expect(reducer(mockState2, action)).toEqual({
      ...mockState2,
      cards: [
        { code: '5S', isMatched: true },
        { code: 'KS', isMatched: true }
      ],
      matchedPairs: 1
    })
  })

  it('default returns state', () => {
    const action = {}
    expect(reducer(mockState, action)).toEqual({
      ...mockState
    })
  })
})
