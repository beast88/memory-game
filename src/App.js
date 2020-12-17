import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Assets from './Assets/Assets'
import About from './Components/About'
import Character from './Components/Character'

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [guess, setGuess] = useState([])
  const [spread, setSpread] = useState([])

  const handleClick = (id) => {
    if(guess.includes(id) === false) {
      setScore(score + 1)
      setGuess(prevGuess => [...prevGuess, id])
    } else {
      resetGame()
    }
  }

  const resetGame = () => {
    if(score > bestScore){
      setBestScore(score)
    }
    setScore(0)
    setGuess([])
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

  //const checker = (arr, target) => target.every(n => arr.includes(n))

  // const cardCheck = (selection, picks) => {
  //   if (guess.length >= 3 && guess.length < 35) {
  //     if(checker(picks, guess) === true) {
  //       console.log('true')
  //     } else {
  //       console.log('false')
  //       return selection
  //     }
  //   } else {
  //     return selection
  //   }
  // }

  const getSpread = () => {
    let selection = shuffle(Assets).slice(0, 3)

    setSpread(selection)
    console.log(guess)
  }

  useEffect(() => {
    getSpread()
  }, [score])

  const cards = spread.map(card => {
    return <Character 
              data={card}
              handleClick={handleClick}
              key={card.id} 
            />
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
