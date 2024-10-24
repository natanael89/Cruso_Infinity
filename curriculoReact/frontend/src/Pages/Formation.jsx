import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import "../Style/formation.css";




const Formation = ({projects}) => {
   const location = useLocation();
   const [project, setProject] = useState({
        title: 'Formação',
        description: 'Aqui estão os detalhes da formação',
        image: '',
     });
   

   useEffect(() => {
     if(location.state && location.state.image){
        setProject({
             title: location.state.title || 'Formação',
             description: location.state.description || 'Aqui estão os detalhes da formação.',
             image: location.state.image,
        });
     }
   }, [location])

  

    return (
        <div className="formation-container">
            <Navbar/>
            <div className="formation-banner" 
            style={{ 
                backgroundImage: project.image ? `url(${project.image})` : 'none',
                backgroundColor: project.image ? 'transparent' : '#333'
                }}>
              <div className="banner">
               <h1>{project.title}</h1>
               <p>{project.description}</p>
              </div>
            </div>
            <div className="formation-content">
                <h2>Detalhes da Formação {project.title}</h2>
                
            </div>
        </div>
    )
}   

export default Formation;