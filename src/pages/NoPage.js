import { Link } from "react-router-dom";

function NoPage() {
    return (
        <>
            <h1> Pas de quizz par ici :'( </h1>
            <h2> Pour les plus habitués, c'est une page d'erreur 404. 
            Vous avez dû entrer un mauvais lien URL. </h2>
            Mais je vous permets de revenir au <Link to= '/'>Menu</Link> !
        </>
    )
}

export default NoPage