import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Assets from './Assets/Assets'
import About from './Components/About'
import Character from './Components/Character'

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [guess, setGuess] = useState([])

  const scoreUpdate = () => {
    setScore(score + 1)
  }

  const resetGame = () => {
    setBestScore(score)
    setScore(0)
  }

  const shuffle = (arr) => {
    let currentIndex = arr.length, tempValue, randomIndex

    while(0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex--)

      tempValue = arr[currentIndex]
      arr[currentIndex] = arr[randomIndex]
      arr[randomIndex] = tempValue
    }

    return arr
  }

  const characterGen = () => {
    let selection = shuffle(Assets).slice(0, 3)
    return selection

    //Need to make sure the selection includes at least one card that hasn't been selected by the player already
  }

  const cards = characterGen().map(card => {
    return <Character data={card} />
  })

  return(
    <div className="container">
      <Header />
      <About />

      <div className="score-card">
        <h3>Current Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>

      <div className="card-container">
        {cards}
      </div>

    </div>
  )
}

export default App;
