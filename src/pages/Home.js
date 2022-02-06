import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1> Bienvenue sur mon site de quiz ! </h1>
            <p> Sur ce site, vous pouvez vous mettre à l'épreuve en répondant à des quiz de thématique différentes.
            <br/> Toujours en développement, vous aurez l'occasion de voir de nouveaux thèmes à l'avenir. Vous avez accès aux sujets disponibles maintenant ci-dessous.

            </p>
            <h2> Choisissez votre quiz ! </h2>
            <ul>
                <li>
                    <Link
                    to="/quiz-pays-et-capitales">
                    Pays et capitales
                    </Link>
                </li>
                <li>
                    <Link
                    to="/quiz-surnom-de-joueurs">
                    Les surnoms des joueurs
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Home