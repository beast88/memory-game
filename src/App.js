import React, {useState} from 'react'
import Header from './Components/Header'
import Assets from './Assets/Assets'
import About from './Components/About'
import Character from './Components/Character'

const App = () => {

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

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cards, setCards] = useState(Assets)
  const [spread, setSpread] = useState(shuffle([...cards]).slice(0, 3))

  const handleClick = (id) => {
   const clickedCard = cards.find(card => card.id === id)

   if(clickedCard.isClicked === true){
    gameOver()
    resetGame()
   } else {
    setScore(score + 1)

    setCards(
      [...cards.map(card => {
        if(card.id === id) {
          card.isClicked = true
        }
        return card
      })]
    )

    newSpread()
   }
  }

  const resetGame = () => {
    if(score > bestScore){
      setBestScore(score)
    }
    setScore(0)

    setCards([...cards.map(card => {
      card.isClicked = false
      return card
    })])

    setSpread(shuffle([...cards]).slice(0, 3))
  }

  const gameOver = () => {
    const unclickedCards = [...cards.filter(card => card.isClicked === false)]

    if(unclickedCards.length === 0){
      resetGame()
    }
  }

  const newSpread = () => {
    const unclickedCards = [...cards.filter(card => card.isClicked === false)]

    const validCard = shuffle(unclickedCards).filter(
      card => !spread.includes(card)
    )[0]

    const options = [validCard,
      ...shuffle(cards.filter(card => card.id !== validCard.id && !spread.includes(card))).slice(0, 2)
    ]

    setSpread(shuffle([...options]))
  }

  const displayCards = spread.map(card => {
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
        {displayCards}
      </div>

    </div>
  )
}

export default App;
