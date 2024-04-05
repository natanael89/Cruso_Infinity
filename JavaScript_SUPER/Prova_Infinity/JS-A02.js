// Prova Condicionais

// Variaveis e Entrada de dados
const nome = prompt("Digite seu nome");

let peso = parseFloat(prompt("Informe seu peso ? "));

let altura = parseFloat(prompt("Informe sua altura ? "));

// Processamento calculo  IMC
let imc = peso / (altura * altura);

// Processamento Condicional

if (imc < 16) {
    console.log("Baixo peso muito grave");
} else if (imc >= 16 && imc < 16.99){
    console.log("Baixo peso grave");
} else if (imc >= 17 && imc < 18.49){
    console.log("Baixo peso");
} else if (imc >= 18.50 && imc < 24.99){
    console.log("Peso normal");
} else if (imc >= 25 && imc < 29.99){
    console.log("Sobrepeso");
} else if(imc >= 30 && imc < 34.99){
    console.log("Obesidade grau I");
} else if(imc >= 35 && imc < 39.99){
    console.log("Obesidade grau II");
} else if(imc >= 40 ){
    console.log("Obesidade grau III");
}

// Saida de Dados

console.log(
    "Nome: " + nome + "\n" +
    "Peso: " + peso + "\n" +
    "Altura: " + altura + "\n" +
    "IMC: " + imc.toFixed(2) + "\n"
)