import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import FormularioContexto from "../Context/FormularioContexto";


const FromularioPage = () => {
    const {  criarCadastro } = useContext(FormularioContexto);
    const navegate = useNavigate();
   
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        criarCadastro(nome, email, idade);

        setNome('');
        setEmail('');
        setIdade('');
        navegate('/listagem')
    }

    return (
        <div>
            <Navbar/>
            <div>
                <h1>Formulario</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input 
                        type="text" 
                        name="nome" 
                        value={nome} 
                        onChange={e => setNome(e.target.value)}
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        Idade:
                        <input 
                        type="number" 
                        name="idade" 
                        value={idade} 
                        onChange={e => setIdade(e.target.value)}/>
                    </label>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default FromularioPage;