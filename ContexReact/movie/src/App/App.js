import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Style/App.css';

import { FormularioProvider } from '../Context/FormularioContexto.js';
import FromularioPage from '../Page/FormularioPage.jsx';
import TabelaPage from '../Page/TabelaPage.jsx';
import CarrinhoPage from '../Page/CarrinhoPage.jsx';


function App() {
  return (
      <FormularioProvider>
        <Router>
          <Routes>
             <Route path='/' element={<FromularioPage/>}/>
             <Route path='/listagem' element={<TabelaPage/>}/>
             <Route path='/carrinho' element={<CarrinhoPage/>}/>
          </Routes>
        </Router>
      </FormularioProvider>
         
  );
}

export default App;
