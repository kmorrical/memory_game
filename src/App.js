import React from 'react'
import './App.css'
import swal from 'sweetalert'
import CardRows from './components/CardRows'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { fetchCards } from './fetchCards'

function App () {
  const dispatch = useDispatch()

  const shuffle = () => {
    dispatch(fetchCards())
  }

  const fireDirections = () => {
    swal(
      'Instructions',
      'Click to flip over a card. Flip over two cards and see if they match. They must be the same exact card (suit and number). If they do not, they will flip back over. If they do, they will disappear. Play until all cards disappear.',
      'success'
    )
  }

  return (
    <div className='App'>
      <Header />
      <button type='button' className='btn-darkred' onClick={shuffle}>
        Start New Game
      </button>
      <button type='button' className='btn-darkred' onClick={fireDirections}>
        How to Play
      </button>
      <div>
        <CardRows />
      </div>
    </div>
  )
}

export default App
