import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


const Navbar = ({ inicio, formacion, experiencia, top10  }) => {

    return (
        <div className="navbar">
            <div className="logo">
                <h1>NatanaelFlix</h1>
            </div>
            <div className="nav-links">
             <Link to="/" className="link">{inicio}</Link>
             <Link to="/formation" className="link">{formacion}</Link>
             <Link to="/experience" className="link">{experiencia}</Link>
             <Link to="/top10" className="link">{top10}</Link>
            </div>
        </div>
    )
}

export default Navbar