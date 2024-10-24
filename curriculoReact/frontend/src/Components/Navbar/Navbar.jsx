import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-links'>
                <Link className='nav-link' to='/'>Início</Link>
                <Link className='nav-link' to='/formations'>Formações</Link>
                <Link className='nav-link' to='/experiences'>Experiências</Link>
                <Link className='nav-link' to='/top10'>Top10</Link>
                <Link className='nav-link' to='/portfolio'>Portfólio</Link>
            </ul>
        </nav>
    )
}

export default Navbar;