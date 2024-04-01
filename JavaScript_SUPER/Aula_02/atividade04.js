// Atividade 04
// Algoritmo triângulo

// Variaveis e entrada de dados

let lado1 = parseFloat(prompt("Informe o valor do lado 1 do triângulo"));
let lado2 = parseFloat(prompt("Informe o valor do lado 2 do triângulo"));
let lado3 = parseFloat(prompt("Informe o valor do lado 3 do triângulo"));

// processamento conditional

    if(lado1 == lado2 && lado1 == lado3){
        // Saida de Dados
        console.log("É um triângulo equilátero");
    } else if((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)){
        // Saida de Dados
        console.log("É um triângulo isósceles");
    } else {
        // Saida de Dados
        console.log("É um triângulo escaleno");
    }
