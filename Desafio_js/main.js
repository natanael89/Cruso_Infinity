function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0){
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);

    const result =  document.getElementById('resultado');

    result.innerText = `Seu IMC é: ${imc.toFixed(2)}`;


}

function calcularNovamente() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('peso').focus();
}