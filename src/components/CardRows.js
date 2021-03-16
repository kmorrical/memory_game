import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { matchCards } from '../actions/action'
import swal from 'sweetalert'

function CardRows () {
  const cards = useSelector(state => state.reducer.cards)
  const error = useSelector(state => state.reducer.error)
  const matchedPairs = useSelector(state => state.reducer.matchedPairs)
  const [cardsFlipped, setCardsFlipped] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    if (matchedPairs === 12) {
      swal('Congrats!', 'You matched all of the cards!', 'success')
    }
  }, [matchedPairs])

  const attemptMatch = (cardId, index) => {
    const obj = {}
    obj['cardId'] = cardId
    obj['index'] = index
    const newCardsFlipped = [...cardsFlipped, obj]
    setCardsFlipped(newCardsFlipped)
    //referring to newcardsflipped array since this object is not updated immediately here for me to use
    if (newCardsFlipped.length === 2) {
      if (newCardsFlipped[0].cardId === newCardsFlipped[1].cardId) {
        setTimeout(function () {
          dispatch(
            matchCards(newCardsFlipped[0].index, newCardsFlipped[1].index)
          )
          setCardsFlipped([])
        }, 500)
      } else {
        setTimeout(function () {
          setCardsFlipped([])
        }, 1000)
      }
    }
  }

  const getAnimationDelay = i => {
    let secondCount = i
    secondCount -= i * 0.9
    const secondString = secondCount.toString()
    const secondStringS = secondString + 's'
    return secondStringS
  }

  return (
    <>
      {cards && cards.length > 0 && (
        <div className='card_row_container'>
          {cards.map(function (card, i) {
            return (
              <Card
                attemptMatch={attemptMatch}
                setCardsFlipped={cardsFlipped}
                key={i}
                card={card}
                cardsFlipped={cardsFlipped}
                index={i}
                animationDelay={getAnimationDelay(i)}
              />
            )
          })}
        </div>
      )}
      {error && (
        <div className='error_container'>
          Error. The game is currenly down. Sorry, try again later!
        </div>
      )}
    </>
  )
}

export default CardRows
