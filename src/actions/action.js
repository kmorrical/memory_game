export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS'
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR'
export const MATCH_CARDS = 'MATCH_CARDS'
export const CLEAR_CARDS = 'CLEAR_CARDS'

export function fetchCardsSuccess (cards) {
  return {
    type: FETCH_CARDS_SUCCESS,
    cards: cards
  }
}

export function clearCards () {
  return {
    type: CLEAR_CARDS,
    cards: []
  }
}

export function fetchCardsError (error) {
  return {
    type: FETCH_CARDS_ERROR,
    error: error
  }
}

export function matchCards (id1, id2) {
  return {
    type: MATCH_CARDS,
    id1: id1,
    id2: id2
  }
}
