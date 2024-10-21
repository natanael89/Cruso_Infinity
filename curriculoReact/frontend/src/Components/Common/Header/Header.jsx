import React from "react";
import Navbar from "../../Container/Navbar/Navbar";
import "./style.css"

const Header = () => {
    return (
        <div className="header">
            <Navbar 
               inicio="Início"
               formacion="Formação"
               experiencia="Experiencia"
               top10="Top 10"
            />
            
        </div>
    )
}


export default Header