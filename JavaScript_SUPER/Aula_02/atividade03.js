// Atividade 03
// Algoritmo verificar preço e idade para dar desconto

// Variaves e Entrada de Dados
const preso = parseFloat(prompt('Informe o preço do produto'));

const idade = parseFloat(prompt('Informe a idade'));

let desconto = 0

// processamento conditional

if(idade == 18){
    desconto = preso - (preso/10)
    console.log("Por ter 18 anos você ganhou desconto de 10% " + desconto )
} else if ( idade < 18 || idade > 18){
    console.log("Por não ter 18 anos não tem direito de desconto")
}
