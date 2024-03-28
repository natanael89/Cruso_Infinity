const n1 = parseFloat(prompt("Digite a 1ª nota"));

const n2 = parseFloat(prompt("Digite a 2ª nota"));

const n3 = parseFloat(prompt("Digite a 3ª nota"));

const media = (n1 + n2 + n3) / 3 ;

console.log(
    `
    Notas informada

    Nota 1 : ${n1}
    Nota 2 : ${n2}
    Nota 3 : ${n3}

    Média da Nota :${media}
    `
);