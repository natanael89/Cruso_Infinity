import React, { createContext, useState } from "react";


const GaleriaContext = createContext();

const GaleriaProvider = ({ children }) => {
    const [fotos, setFotos] = useState([
        {id: 1, url: 'https://picsum.photos/200', titulo: 'Foto 1', descricao: 'Descrição da foto 1'},
        {id: 2, url: 'https://picsum.photos/201', titulo: 'Foto 2', descricao: 'Descrição da foto 2'},
        {id: 3, url: 'https://picsum.photos/202', titulo: 'Foto 3', descricao: 'Descrição da foto 3'},
    ])

    
    return (
        <GaleriaContext.Provider
          value={{
            fotos,
            setFotos,
          }}
        >
          {children}
        </GaleriaContext.Provider>
    )
}

export { GaleriaContext, GaleriaProvider };