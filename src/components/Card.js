import React from 'react'

function Card (props) {
  const { card, cardsFlipped, index } = props

  const attemptMatch = () => {
    props.attemptMatch(card.code, index)
  }

  const cardDown =
    'https://res.cloudinary.com/osidekweenyasss/image/upload/v1539213795/cardback.png'
  const starIcon = 'https://i.imgur.com/d4iyhbf.jpg'
  const cardFlipped = cardsFlipped.find(o => o.index === index)
  const cardImage =
    cardFlipped && !card.isMatched
      ? card.image
      : card.isMatched
      ? starIcon
      : cardDown

  return (
    <div
      className='single_card'
      onClick={props.cardsFlipped.length < 2 ? attemptMatch : null}
    >
      <img
        alt={card.code}
        src={cardImage}
        style={{ animationDelay: props.animationDelay }}
        className='card_img card_image_animation'
      />
    </div>
  )
}

export default Card
