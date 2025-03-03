import React from 'react';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { GaleriaProvider} from '../Context/GaleriaContext'
import Galeria from '../Components/Galeria.js';
import '../Style/App.css';
import Fotos from '../Components/Foto.js';

function App() {
  return (
    <GaleriaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Galeria />} />
          <Route path="/foto/:id" element={<Fotos />} />
        </Routes>
      </BrowserRouter>
    </GaleriaProvider>
  );
}

export default App;
