import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/Home';
import QuizGeo from './pages/QuizGeo'
import QuizSport from './pages/QuizSport'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/quiz-pays-et-capitales" element={<QuizGeo />} />
          <Route path="/quiz-surnom-de-joueurs" element={<QuizSport />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
