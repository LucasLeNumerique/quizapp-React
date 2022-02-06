import { useState } from "react"
import { dataGeo } from "./json/data-geo"

function App() {
  
const [currentQuestion, setCurrentQuestion] = useState(0)
const [myAnswer, setMyAnwser] = useState("")
const [score, setScore] = useState(0)
const [finished, setFinish] = useState(false)
const [show, setShow] = useState(false)
const [clickAnswer, setClickAnswer] = useState(false)

const checkAnswer = (proposition) => {
  setMyAnwser(proposition)
  setClickAnswer(true)
}

const checkCorrectAnswer = () => {
  if (myAnswer === dataGeo[currentQuestion].answer) {
    setScore(score + 1)
  }
}

const showAnswer = () => {
  setShow(true)
}

const reset = () => {
  setShow(false)
  setClickAnswer(false)
}

const endQuiz = () => {
  if (currentQuestion === dataGeo.length - 1) {
    setFinish(true)
  }
}

const startOver = () => {   // Quizz reset
  setCurrentQuestion(0)
  setFinish(false)
  setMyAnwser("")
  setScore(0)
}

if (finished) {
  return (
    <div className="Quiz-container">
      <h2> Quiz terminé ! Merci d'avoir participé ! </h2>
      <h3> Votre score final est de {score} / {dataGeo.length} </h3>

      <button
      onClick={() => startOver()}>
        Refaire ce quiz
      </button>
    </div> 
  )
} else {
  return (
    <div className="Quiz-container">
      
      <h2 className="Question"> {dataGeo[currentQuestion].question} </h2>

        {dataGeo[currentQuestion].propositions.map((proposition) => (
          <ul className="Propositions">

            <li className="Answers"
            key={proposition.id}
            className={`proposition ${
            myAnswer === proposition
            ? myAnswer === dataGeo[currentQuestion].answer
            ? "correctAnswer"
            : "incorrectAnswer"
            : null
            }`}
            onClick={() => checkAnswer(proposition)}
            >
              {proposition}
            </li>

          </ul>
          ))}

        {currentQuestion < dataGeo.length - 1 && (
        <button
        onClick={() => {
        setCurrentQuestion(currentQuestion + 1)
        checkCorrectAnswer()
        reset()
        }}
        >
        NEXT
        </button>
        )}

        {currentQuestion === dataGeo.length - 1 && (
        <button
        onClick={() => endQuiz()}
        >
          FINISH
        </button>
        )}

    

      <span className="progress"> Question {currentQuestion + 1} / {dataGeo.length} </span>

    </div> 
  )
}

}



export default App;
