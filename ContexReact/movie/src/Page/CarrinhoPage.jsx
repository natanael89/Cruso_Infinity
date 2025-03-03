import React from "react";
import { CarrinhoProvider } from "../Context/CarrinhoContext";
import Navbar from "../Components/Common/Navbar";
import Produto from "../Components/Container/Produto.jsx";
import Carrinho from "../Components/Container/Carrinho.jsx";


const CarrinhoPage = () => {
    const produtos = [
        { id: 1, nome: "Notebook",  preco: 2000 },
        { id: 2, nome: "Smartphone", preco: 1500 },
        { id: 3, nome: "Tablet", preco: 1000 }
        //... mais produtos aqui...
     ];
    

    return (
        <CarrinhoProvider>
            <Navbar/>
            <h1>Carrinho</h1>
            {produtos.map((produto) => (
                <Produto key={produto.id} produto={produto} />
            ))}
            <Carrinho />
        </CarrinhoProvider>
    );
};

export default CarrinhoPage;