const produto = parseFloat(prompt("Informe o valor do Produto ?"));

const desconto = produto - (produto/10)

console.log("Valor do Produto foi: R$ " + produto + " \ncom desconto de 10% foi para: R$ " + desconto);