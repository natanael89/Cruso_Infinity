import React, { useContext } from 'react';
import Navbar from '../Components/Common/Navbar';
import FormularioContexto from '../Context/FormularioContexto';


const TabelaPage = () => {
    const { dados, excluirCadastro } = useContext(FormularioContexto);

  
    return (
        
        <div>
            <Navbar/>
            <h1>Tabela de Dados</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Idade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((dado, id) => (
                        <tr key={id}>
                            <td>{dado.nome}</td>
                            <td>{dado.email}</td>
                            <td>{dado.idade}</td>
                            <td><button onClick={() => excluirCadastro(dado.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}   

export default TabelaPage;