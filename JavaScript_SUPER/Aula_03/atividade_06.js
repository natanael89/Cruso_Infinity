// Atividade 06
// Algoritmo dia da semana com loop

// Variaves | Entrada de dados

let diaDaSemana = prompt("Informe um número de 1 a 7 e saiba qual é o dia da semana");


switch(diaDaSemana){
    case "1":
        console.log("Segunda-feira");
        break;
    case "2":
        console.log("Terça-feira");
        break;
    case "3":
        console.log("Quarta-feira");
        break;
    case "4":
        console.log("Quinta-feira");
        break;
    case "5":
        console.log("Sexta-feira");
        break;
    case "6":
        console.log("Sábado");
        break;
    case "7":
        console.log("Domingo");
        break;
    default: 
        console.log("Opção Inválida");            
}