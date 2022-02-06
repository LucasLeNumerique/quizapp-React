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
          <Route index element={<Home />} />
          <Route path="/pays-et-capitales" element={<QuizGeo />} />
          <Route path="/surnom-de-joueurs" element={<QuizSport />} />
          <Route path="/rappeurs" element={<QuizRap />} />
          <Route path="/symboles-chimiques" element={<QuizScience />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
