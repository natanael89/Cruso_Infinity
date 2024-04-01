// Atividade 05
// Algoritmo dia da semana

// Variaveis e entrada de dados

let diaSemana = prompt("Informe um número de 1 a 7 ? e saiba que dia da semana é ");

switch (diaSemana){
    case "1":
        console.log("Segunda-Feira");
        break;
    case "2":
        console.log("Terça-Feira");
        break;
    case "3":
        console.log("Quarta-Feira");
        break;
    case "4":
        console.log("Quinta-Feira");
        break;
    case "5":
        console.log("Sexta-Feira");
        break;
    case "6":
        console.log("Sábado");
        break;
    case "7":
        console.log("Domingo");
        break;
    default:
        console.log("Número informado não existe");
        break;
}