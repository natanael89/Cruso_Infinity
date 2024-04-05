// Desafio Prático
// Algoritmo Criar um menu com cálculos geométricos

// Variaveis e Entra de Dados
let lado1 = 0;
let lado2 = 0;
let lado3 = 0;

let area = 0;
let volume = 0;

let menu = prompt(
    "Menu Opções \n" +
    "1. Calcular Área do Triângulo\n" +
    "2. Calcular Área do Retângulo\n" +
    "3. CalcularVolume do Cubo\n" +
    "4. Calcular Área do Círculo\n" +
    "5. Sair"
)

switch (menu){
    case "1":
        lado1 = prompt("Digite o valor do lado 1 do triângulo")
        lado2 = prompt("Digite o valor do lado 2 do triângulo")
        lado3 = prompt("Digite o valor do lado 3 do triângulo")
        area = (lado1 * lado2) / 2
        console.log("A área do triângulo é: " + area)
        break
    case "2":
        lado1 = prompt("Digite o valor do lado 1 do retângulo")
        lado2 = prompt("Digite o valor do lado 2 do retângulo")
        area = lado1 * lado2
        console.log("A área do retângulo é: " + area)
        break
    case "3":
        lado1 = prompt("Digite o valor do lado 1 do cubo")
        lado2 = prompt("Digite o valor do lado 2 do cubo")
        lado3 = prompt("Digite o valor do lado 3 do cubo")
        volume = lado1 * lado2 * lado3
        console.log("O volume do cubo é: " + volume)
        break
    case "4":
        lado1 = prompt("Digite o valor do raio do círculo")
        area = Math.PI * Math.pow(lado1, 2)
        console.log("A área do círculo é: " + area)
        break
    case "5":
        if(!menu === "5"){
        console.log("Saindo do programa")
        } else {
            menu;
        }
        break
    default:
        if(!menu == false){
        console.log("Opção Inválida")  
        } else {
            menu
        }
         
}