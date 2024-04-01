// Atividade 01 
// algoritmo numero positivo e par 

// Variaves e entrada de dados
let verificar = prompt("Digite um número e verifique se é Pósitivo e Par ?");

// processamento conditional
if (verificar <= 0) {
    // saida de Dados
   console.log(verificar + " Número não é positivo")
} else if (verificar % 2 == 0){
     // saida de Dados
    console.log(verificar + " Número é positivo")
    console.log(verificar + " Número é par")
} else {
     // saida de Dados
    console.log(verificar + " Não é Número par")
}