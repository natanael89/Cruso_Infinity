// Atividade 05
// Algoritm Verificar média de idade

// Variaves Entrada de dados

let contador = 0;
let  idade = 0;

let media = ""

// Processamento loop

do {
   contador++;

   idade = prompt("Verifica sua média de idade ?");
   
   // Processamento conditional

   if(idade >= 0 && idade <= 25){
      media = "Jovem";
   } else if(idade >= 26 && idade <= 60){
      media = "Adulto";
   } else if (idade > 60){
      media = "Idoso";
   }
   
   // Saida de Dados

   console.log("Turma verificada: \n" + media);
} while (contador < 5)