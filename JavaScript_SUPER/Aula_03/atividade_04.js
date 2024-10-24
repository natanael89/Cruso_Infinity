// Atividade 04
// Algoritmo Conferi nome e senha do usuário

// Variaveis e entrada de dados
let entra = confirm("Entra como usuário?")

let nome = "";
let senha = "";

// processamento conditional

while(entra !== false){
    // saida de Dados
    nome = prompt("Digite seu nome");
    senha = prompt("Digite sua senha");

if (nome == nome && senha == senha) {
    // saida de Dados
    console.log("Bem vindo " + nome);
} else {
    // saida de Dados
    console.log("Usuário ou senha incorreto verifique novamente?");
}
    entra = confirm("conferi usuário e senha novamnete?")
}