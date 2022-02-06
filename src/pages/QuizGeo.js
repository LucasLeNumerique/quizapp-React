import { useState } from "react"
import { Link } from "react-router-dom"
import { dataGeo } from "../json/dataGeo"

function QuizGeo() {
  
const [currentQuestion, setCurrentQuestion] = useState(0)
const [myAnswer, setMyAnwser] = useState("")
const [score, setScore] = useState(0)
const [finished, setFinish] = useState(false)

const checkAnswer = (proposition) => {
    setMyAnwser(proposition)
}

const checkCorrectAnswer = () => {
    if (myAnswer === dataGeo[currentQuestion].answer) {
        setScore(score + 1)
    }
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
        <>
            <h2> Quiz terminé ! Merci d'avoir participé ! </h2>
            <h3> Votre score final est de {score} / {dataGeo.length} </h3>
            
            <button className="go-back"
            onClick={() => startOver()}>
            Refaire ce quiz
            </button>

            <Link
            to="/">
            Retour au menu
            </Link>
        </> 
    )
} else {
    return (
    <>
      
        <h2 className="Question"> {dataGeo[currentQuestion].question} </h2>

        <div className="Propositions">

            {dataGeo[currentQuestion].propositions.map((proposition) => (
                <div className="proposition">

                <span className="answer"
                key={proposition.id}
                onClick={() => checkAnswer(proposition)}
                >
                {proposition}
                </span>

                </div>
            ))}
        </div>
        
        <div className="bottom-quiz">
            {currentQuestion < dataGeo.length - 1 && (
            <button
            onClick={() => {
            setCurrentQuestion(currentQuestion + 1)
            checkCorrectAnswer()
            }}
            className="quiz-btns"
            >
            Suivant
            </button>
            )}

            {currentQuestion === dataGeo.length - 1 && (
            <button
            onClick={() => endQuiz()}
            className="quiz-btns"
            >
            Terminer
            </button>
            )}

        <span className="progress"> Question {currentQuestion + 1} / {dataGeo.length} </span>
      </div>

    </> 
  )
}

}

export default QuizGeo;