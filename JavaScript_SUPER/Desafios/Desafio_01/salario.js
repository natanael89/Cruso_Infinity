let valor = parseFloat(prompt("Informe quanto você ganha por hora ?"))

let horaTrabalhaMes = parseFloat(prompt("Informe quantas horas você trabalha no mês?"))

let mes = 30

let horaPorDia = 8

let horaPorMes = horaTrabalhaMes / mes

let valorDivitido = valor * mes 

let horaTrabalhaSemana = valorDivitido / horaPorDia

let salario = valor * horaTrabalhaMes

let desconto = (salario * 11) / 100

let inss = (salario * 8) / 100

let sind = (salario * 5) / 100






console.log(
    `
    Ganha: R$ ${valor} Por dia
    Trabalha: ${horaTrabalhaMes} Horas por mês
    Trabalha: ${horaPorMes}  Hora por Dia

    Salário bruto: ${salario}

    Desconto em folha
    Imposto 11%: R$ ${desconto}
    INSS 8%: R$ ${inss}
    Sindicato 5%: R$ ${sind}

    Salário líquido: R$ ${(salario - desconto - inss - sind).toFixed(2)}

    Total Desconto: R$ ${(desconto + inss + sind).toFixed(2)}
    `
)
