import {
  fetchCardsSuccess,
  fetchCardsError,
  clearCards
} from './actions/action'

function shuffle (array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

export function fetchCards () {
  return dispatch => {
    dispatch(clearCards())
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=12')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        let cards = res.cards
        const doubledCards = shuffle(cards.concat(cards))
        for (var i = 0; i < doubledCards.length; i++) {
          doubledCards[i].isMatched = false
          doubledCards[i].visibility = 'visible'
        }
        dispatch(fetchCardsSuccess(doubledCards))
        return res
      })
      .catch(error => {
        dispatch(fetchCardsError(error))
      })
  }
}

export default fetchCards
