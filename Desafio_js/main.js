function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0){
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Baixo Peso';
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Excesso de Peso';
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Mórbida';
    }

    const result =  document.getElementById('resultado');
    const classifResult = document.getElementById('classificacao')

    result.innerText = `Seu IMC é: ${imc.toFixed(2)}`;
    classifResult.innerText = `Classificação: ${classificacao}`

}

function calcularNovamente() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('peso').focus();
}