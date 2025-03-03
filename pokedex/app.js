

const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}


getPokemon()

