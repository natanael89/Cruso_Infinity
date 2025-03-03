import React, { createContext, useState } from "react";

const FormularioContexto = createContext();

export const FormularioProvider = ({children}) => {
    const [dados, setDados] = useState([]);
    const [cadastroSelecionado, setCadastroSelecionado] = useState({});

   

    const criarCadastro = (nome, email, idade) => {
       const novoCadastro = {id: Date.now(), nome, email, idade};
       setDados([...dados, novoCadastro]);
    }

    const atualizarCadastro = (id, nome, email, idade) => {
        const index = dados.findIndex((dado) => dado.id === id);
        if(index !== -1) {
            dados[index].nome = nome;
            dados[index].email = email;
            dados[index].idade = idade;
            setDados([...dados]);
        }
    }

    const excluirCadastro = (id) => {
        const index = dados.findIndex((dado) => dado.id === id);
        if(index !== -1) {
            dados.splice(index, 1);
            setDados([...dados]);
        }
    }

    return (
        <FormularioContexto.Provider 
        value={{
            dados,
            criarCadastro,
            atualizarCadastro,
            excluirCadastro,
            cadastroSelecionado,
            setCadastroSelecionado,
       
        }}>
            {children}
        </FormularioContexto.Provider>
    )
}

export default FormularioContexto;