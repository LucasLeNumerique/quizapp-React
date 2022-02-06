import { useState } from "react"
import { data } from "./data"

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
  if (myAnswer === data[currentQuestion].answer) {
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
  if (currentQuestion === data.length - 1) {
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
      <h3> Votre score final est de {score} / {data.length} </h3>

      <button
      onClick={() => startOver()}>
        Refaire ce quiz
      </button>
    </div> 
  )
} else {
  return (
    <div className="Quiz-container">
      
      <h2 className="Question"> {data[currentQuestion].question} </h2>

        {data[currentQuestion].propositions.map((proposition) => (
          <ul className="Propositions">

            <li className="Answers"
            key={proposition.id}
            className={`proposition ${
            myAnswer === proposition
            ? myAnswer === data[currentQuestion].answer
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

        {currentQuestion < data.length - 1 && (
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

        {currentQuestion === data.length - 1 && (
        <button
        onClick={() => endQuiz()}
        >
          FINISH
        </button>
        )}

    

      <span className="progress"> Question {currentQuestion} / {data.length - 1} </span>

    </div> 
  )
}

}



export default App;
