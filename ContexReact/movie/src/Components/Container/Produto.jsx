import React, { useContext } from "react";
import { CarrinhoContext } from "../../Context/CarrinhoContext";

const Produto = ({produto}) => {
    const { addCarrinho } = useContext(CarrinhoContext);
    return(
        <div>
            <h1>{produto.nome}</h1>
            <p>Preço: R${produto.preco}</p>
            <button onClick={() => addCarrinho(produto)}>Adicionar ao carrinho</button>
        </div>
    )
}

export default Produto