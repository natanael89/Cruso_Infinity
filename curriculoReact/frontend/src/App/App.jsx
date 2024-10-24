import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Formation from '../Pages/Formation';
import Experiense from '../Pages/Experiencia';
import Top10 from '../Pages/Top10';
import Portfolio from '../Pages/Portifolio';
import '../Style/App.css';

function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/formations" element={<Formation />} />
         <Route path="/experiences" element={<Experiense />} />
         <Route path="/top10" element={<Top10 />} />
         <Route path="/portfolio" element={<Portfolio />} />
       </Routes>
     </Router>
  );
}

export default App;
