import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
             <Link to='/'>Formulario</Link>
             <Link to='/listagem'>Listagem</Link>
             <Link to='/carrinho'>Carrinho</Link>
        </nav>
    )
}

export default Navbar;