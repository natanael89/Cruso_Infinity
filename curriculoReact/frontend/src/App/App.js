import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Formation from "../Pages/Formation";
import Experiense from "../Pages/Experiense";
import Top10 from "../Pages/Top10";
import './../Styles/App.css';

function App() {
  return (
   <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/experience" element={<Experiense />} />
        <Route path="/top10" element={<Top10 />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
