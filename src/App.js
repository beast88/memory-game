import React, {useState} from 'react'
import Header from './Components/Header'
import Assets from './Assets/Assets'
import About from './Components/About'

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [guess, setGuess] = useState([])

  return(
    <div className="container">
      <Header />
      <About />

      <div className="score-card">
        <h3>Current Score: {score}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
    </div>
  )
}

export default App;
