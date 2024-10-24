// Atividade 03
// Algoritmo somatório com Loop

// Variaves e Entrada de dados

let  add = confirm("Deseja fazer a somar ?");

let somar = 0;

let result = 0;

while(add !== false){
    
    console.log(somar);

    somar = parseFloat(prompt("Informe o número para ser Somado ?"));

    if(somar === 0){
        break;
    } 

    result = result + somar;

}

console.log("Somar encerrada com valor " + result);