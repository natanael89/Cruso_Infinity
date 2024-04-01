// Atividade 06
// Algoritmo verificar se esse número é primo

// Variaveis e entrada de dados

let verificar = prompt("Digite um número e verifique se é primo ?");

// processamento conditional

if (verificar <= 0) {
    // saida de Dados
    console.log(verificar + " Número não é primo")
} else if (verificar % 2 == 0){
    // saida de Dados
    console.log(verificar + " Número é primo")
} else {
    // saida de Dados
    console.log(verificar + " Não é primo")
}