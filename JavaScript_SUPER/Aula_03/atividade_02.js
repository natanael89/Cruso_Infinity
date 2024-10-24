// Atividade 02
// Algoritmo Adicionar Notas com uso Loop

// Variaveis e entrada de dados

let add = confirm("Deseja Adicionar Nota ?");

let nota = 0;

let media;


console.log(add)

do {

    nota = parseFloat(prompt("Digite sua nota")) 

    media = nota + nota / 100;
    
    add = confirm("Deseja adicionar mais nota? sim/não")
} while (add !== false);

alert("Programa encerrado!")

console.log("A Média do Aluno foi: " + media)
