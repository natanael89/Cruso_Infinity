let raio = parseFloat(prompt("Informe o raio do circulo"))

let area = 0;
let pi = Math.PI

let novoRaio = raio * raio

area =  pi * novoRaio;

console.log(`
O valor do Raio foi = ${raio}
O valor de PI é = ${pi}
Primeiro Multiplicamos o Raio que é ${raio} x ${raio} que dá = ${novoRaio}
Agora Multiplicamos o PI ${pi} x Raio ${novoRaio}

O valor da área é = ${area}

`);