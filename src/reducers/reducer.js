import {
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  MATCH_CARDS,
  CLEAR_CARDS
} from '../actions/action'

const initialState = {
  cards: [],
  matchedPairs: 0,
  error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.cards,
        matchedPairs: 0
      }
    case CLEAR_CARDS:
      return {
        ...state,
        cards: action.cards
      }
    case FETCH_CARDS_ERROR:
      return {
        ...state,
        error: action.error
      }
    case MATCH_CARDS:
      const newMatch = state.matchedPairs + 1
      let cardsCopy = state.cards.slice()
      cardsCopy[action.id1].isMatched = true
      cardsCopy[action.id2].isMatched = true
      cardsCopy = newMatch === 12 ? [] : cardsCopy
      return {
        ...state,
        matchedPairs: newMatch,
        cards: cardsCopy
      }
    default:
      return state
  }
}
