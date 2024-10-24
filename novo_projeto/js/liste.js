let lista = [];

let option = "";


do {
    option = prompt(`
        1. Novo Usuario
        2. Listar usuarios
        3. Buscar usuario por nome
        4. Sair
        
        `)

     switch (option) {
        case "1":
            let nome = prompt("Digite seu nome");
            lista.push(nome);
            break;
        case "2":
            alert(lista);
            break;
        case "3":
            let nomeBuscar = prompt("Digite o nome do usuario");
            let index = lista.findIndex(item => item.nome === nomeBuscar);
            if(index > -1) {
                alert(lista[index]);
            } else {
                alert("Usuario não encontrado");
            }
            break;
        case "4":
            console.log("Saindo...");
            condition = false;
            break;
        default:
            alert("Opção invalida!!!");    
     }    
} while (option !== "4");
