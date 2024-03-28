const n1 = parseFloat(prompt("Informe a nota 1"));

const n2 = parseFloat(prompt("Informe a nota 2"));

const n3 = parseFloat(prompt("Informe a nota 3"));

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
