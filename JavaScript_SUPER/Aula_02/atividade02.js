// Atividade 02
// Algoritmo verificar IMC

// Variaveis e entrada de dados

let peso = prompt("Digite seu peso");
let altura = prompt("Digite sua altura");
let imc = peso / (altura * altura);

// processamento conditional

if (imc < 18.5) {
     // Saida de dados
     console.log("Abaixo do peso");
     console.log(imc);
} else if (imc >= 18.5 && imc < 25) {
     // Saida de dados
     console.log("Peso ideal");
     console.log(imc);
} else if (imc >= 25 && imc < 30) {
     // Saida de dados
     console.log("Acima do peso");
     console.log(imc);
} else if (imc >= 30 && imc < 35) {
     // Saida de dados
     console.log("Sobrepeso");
     console.log(imc);
} else if (imc >= 35 && imc < 40) {
     // Saida de dados
     console.log("Obesidade");
     console.log(imc);
} else if (imc >= 40 && imc < 50) {
     // Saida de dados
     console.log("Obesidade mórbida");
     console.log(imc);
}

