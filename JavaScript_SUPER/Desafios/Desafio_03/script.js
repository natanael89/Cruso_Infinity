// Desafio Pratico 03
// Algoritmo Caixa eletrônico

// Variaves | Entrada de dados

let saldo = 1000;
let saque = 0;
let deposito = 0;

let menuOpcao = ""


do {
    
    menuOpcao = prompt(
        "Menu opções\n" +
        "1 - Var Saldo\n" +
        "2 - Fazer Saque\n" +
        "3 - Fazer Depósito\n" +
        "4 - Sair\n"
    
    )
    
    switch (menuOpcao){
        case "1":
            console.log("Saldo atual: " + saldo)
            console.log("Valor em saque: " + saque)
            break;
        case "2":
            saque = parseFloat(prompt("Informe o valor do saque"));
            saldo -= saque;

            if(saldo <= 0){
                alert("Sua conta está Zerada");
                saldo = 0;
                console.log("Saldo Atual: " + saldo)
            }
            break;

        case "3":
            deposito = parseFloat(prompt("Informe o valor do deposito"));
            let valor = saldo - deposito

            saldo += valor

            if(saldo >= 1000){
                alert("Limite de deposito é até: R$1000");
                console.log("Verifique o valor de deposito: " + deposito)
                console.log("Para completa o valor precisa só de: " + valor)
            } else if (saldo > 1000){
                saldo = valor - saldo
                console.log("Valor de deposito completo: " + saldo)
               
            }
            break;

        case "4":
            alert("Programa finalizado...");
            break;

        default:
            console.log("Opção Inválida");
    }
} while (menuOpcao !== "4");


console.log(
    "Saldo atual: " + saldo +
    "\nValor Sacado: " + saque +
    "\nValor Depositado: " + deposito

)