import React from "react";
import { GaleriaContext } from '../Context/GaleriaContext.js'
import { Link } from "react-router-dom";

const Galeria = () => {
    const { fotos } = React.useContext(GaleriaContext);

    return(
       <div>
          <h1>Galeria</h1>
          {fotos.map((foto, id) => (
             <div key={id}>
                <Link to={`/foto/${foto.id}`}>
                   <img src={foto.url} alt={foto.titulo} />
                   <h2>{foto.titulo}</h2>
                </Link>

             </div>
          ))}
       </div>
    )
}

export default Galeria;