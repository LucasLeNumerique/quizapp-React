import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/Home';
import QuizGeo from './pages/QuizGeo'
import QuizSport from './pages/QuizSport'
import QuizRap from './pages/QuizRap'
import QuizScience from './pages/QuizScience'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />    {/* Composant-page d'accueil */}
          <Route path="/pays-et-capitales" element={<QuizGeo />} />    {/* Composant-page du Quiz */}
          <Route path="/surnom-de-joueurs" element={<QuizSport />} />    {/* Composant-page du Quiz */}
          <Route path="/rappeurs" element={<QuizRap />} />    {/* Composant-page du Quiz */}
          <Route path="/symboles-chimiques" element={<QuizScience />} />    {/* Composant-page du Quiz */}
          <Route path="*" element={<NoPage />} />    {/* Erreur 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
