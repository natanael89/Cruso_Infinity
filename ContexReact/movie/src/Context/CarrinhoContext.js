import React, { createContext, useState } from "react";

const CarrinhoContext = createContext();


const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [total, setTotal] = useState(0);

    const addCarrinho = (produto) => {
        const produtoExiste = carrinho.find((item) => item.id === produto.id);
        if (produtoExiste) {
            produtoExiste.quantidade += 1;
        } else {
            carrinho.push({...produto, quantidade: 1});
        }
        setCarrinho([...carrinho])
        calcularTotal();
    }

    const removerCarrinho = (id) => {
        const novoCarrinho = carrinho.filter((item) => item.id !== id);
        setCarrinho(novoCarrinho);
        calcularTotal();
    }

    const calcularTotal = () => {
        const totalCalculado = carrinho.reduce((acumulado, item) => {
            return acumulado + (item.preco * item.quantidade);
        }, 0);
        setTotal(totalCalculado);
    }

    return (

        <CarrinhoContext.Provider
          value={{
            carrinho,
            addCarrinho,
            removerCarrinho,
            total,
          }}
        >

            {children}
        </CarrinhoContext.Provider>
    )

}

export {
    CarrinhoProvider,
    CarrinhoContext
}