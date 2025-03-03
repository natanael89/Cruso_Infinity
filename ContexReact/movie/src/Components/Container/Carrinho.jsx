import React, { useContext } from "react";

import { CarrinhoContext } from "../../Context/CarrinhoContext";

const Carrinho = () => {
    const { carrinho, removerCarrinho, total } = useContext(CarrinhoContext);
    return (
        <div>
            <h2>Carrinho</h2>
            <ul>
                {carrinho.map((item) => (
                    <li key={item.id}>
                        {item.nome} x {item.quantidade} = R${item.preco * item.quantidade}
                        <button onClick={() => removerCarrinho(item.id)}>Remover</button>
                    </li>
                ))}
            </ul>
            <p>Total: R${total}</p>
        </div>
    )
}

export default Carrinho;