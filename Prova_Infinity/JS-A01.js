const n1 = parseFloat(prompt("Informe a 1 nota"));

const n2 = parseFloat(prompt("Informe a 2 nota"));

const n3 = parseFloat(prompt("Informe a 3 nota"));

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