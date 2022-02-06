import { useState } from "react"
import { Link } from "react-router-dom"
import { dataGeo } from "../json/dataGeo"

function QuizGeo() {
  
const [currentQuestion, setCurrentQuestion] = useState(0)   // Index array[0]
const [myAnswer, setMyAnwser] = useState("")    // Réponse nulle
const [score, setScore] = useState(0)   // Score nul ou réinitialisé
const [finished, setFinish] = useState(false)   // Pas de changement de rendu (game over) tant que le booléen est false

const checkAnswer = (proposition) => {  // Assigner la réponse
    setMyAnwser(proposition)
}

const checkCorrectAnswer = () => {  // Vérifier la réponse
    if (myAnswer === dataGeo[currentQuestion].answer) {
        setScore(score + 1)
    }
}

const endQuiz = () => {     // Booléen finish true pour afficher le Game Over
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
            {/* Affichage du score final */}
            
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

            {/* Récupérer la liste des propositions (non random malheureusement) */}
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

            {/* Changement de bouton à la dernière question */}
            {currentQuestion === dataGeo.length - 1 && (
            <button
            onClick={() => endQuiz()}
            className="quiz-btns"
            >
            Terminer
            </button>
            )}

            {/** Affichage de la progression */}
        <span className="progress"> Question {currentQuestion + 1} / {dataGeo.length} </span>
      </div>

    </> 
  )
}

}

export default QuizGeo;