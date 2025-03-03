import React, { useContext } from "react";
import { GaleriaContext } from "../Context/GaleriaContext";
import { useParams} from "react-router-dom";

const Fotos = () => {
    const { fotos } = useContext(GaleriaContext);
    const { id } = useParams();

    const foto = fotos.find((foto) => foto.id === parseInt(id));
    
    if(!foto){
        return <div>Foto não encontrada</div>
    }
    return(
         <div>
            <img src={foto.url} alt={foto.titulo}/>
            <h1>{foto.titulo}</h1>
            <p>{foto.descricao}</p>
         </div>
    )
}

export default Fotos;