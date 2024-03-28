const produto = parseFloat(prompt("Informe o valor do Produto ?"));

const desconto = produto - (produto/10) ;

const valorDesconto = (produto * 10) / 100;

console.log("Valor do Produto: R$ " + produto);
console.log("Valor com Desconto de 10%: R$ " + desconto) ;
console.log("Valor Descontado: R$ " + valorDesconto);