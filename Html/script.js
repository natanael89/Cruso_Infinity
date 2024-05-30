let inputEmail = document.getElementById('email');
let inputSenha = document.getElementById('senha');
const  loginEnter = document.querySelector('#entra');
let dados = [];


function login(){
   let dadoLogin = {
      email: inputEmail.value,
      senha: inputSenha.value
   }

    dados.push(dadoLogin);
    console.log(dados);
    inputEmail.value = "";
    inputSenha.value = "";
}

loginEnter.addEventListener('click', (e) =>{
    e.preventDefault();
    login()
});