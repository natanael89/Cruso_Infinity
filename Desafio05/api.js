const modal =  document.getElementById('pokemon-modal');
const closeModal = document.querySelector('.close');
const pokemonContainer = document.getElementById('pokemon-container');
const pokemonDetails = document.getElementById('pokemon-details');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const errorMessage = document.getElementById('error-message');
const loadMoreBtn = document.getElementById('load-more-container');


let offset = 0;
const limit = 21;

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon)
    return pokemon;
}

const loadPokemons = async (offset, limit) => {
    for (let i = offset + 1; i <= offset + limit; i++) {
       try {
        const pokemon = await getPokemon(i);
        createPokemonCard(pokemon);
       } catch (error) {
        console.error(`Error ao carregar o pokemon com ID: ${i}`, error);
       }
    }
}

const searchPokemon = async () => {
    const query = searchInput.value.toLowerCase();
    if(!query){
        const timeout = 2000;
        errorMessage.textContent =  'Por favor, insira um nome ou número';
        setTimeout(() => {
           errorMessage.textContent = '';
        }, timeout);
        return;
    }

    try {
        const pokemon = await getPokemon(query);
        showPokemonDetails(pokemon);
    } catch (error) {
        console.error(error);
        const timeout = 2000;
        errorMessage.textContent =  'Pokemon não encontrado';
        setTimeout(() => {
           errorMessage.textContent = '';
        }, timeout);
        return;
    }

    searchInput.value = '';
}


const getEvolutionChain = async (speciesUrl) => {
    const speciesRes = await fetch(speciesUrl);
    const speciesData = await speciesRes.json();
    const evolutionRes = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionRes.json();

    return evolutionData;
}



const createPokemonCard = (pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');


    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');


    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back')


    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default;
    pokemonImage.alt = pokemon.name;
    pokemonImage.classList.add('pokemon-image');

    const pokemonName = document.createElement('div');
    pokemonName.classList.add('pokemon-name');
    pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    const pokemonHp = document.createElement('div');
    pokemonHp.classList.add('pokemon-hp');
    pokemonHp.textContent = `HP: ${pokemon.stats[0].base_stat}`


    const pokemonId = document.createElement('div');
    pokemonId.classList.add('pokemon-id');
    pokemonId.textContent = `#${pokemon.id.toString().padStart(3, '0')}`;


    const pokemonMoves = document.createElement('div');
    pokemonMoves.classList.add('pokemon-moves');
    pokemonMoves.textContent = `Moves: ${pokemon.moves[0].move.name}`


    const pokemonDescription = document.createElement('div');
    pokemonDescription.classList.add('pokemon-description');
   


    cardBack.appendChild(pokemonName);
    cardBack.appendChild(pokemonImage);
    cardBack.appendChild(pokemonDescription);
    cardBack.appendChild(pokemonHp);
    cardBack.appendChild(pokemonId);
    cardBack.appendChild(pokemonMoves);


    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);


    pokemonCard.appendChild(cardInner);
    pokemonContainer.appendChild(pokemonCard);


    pokemonCard.addEventListener('click', () => {
        showPokemonDetails(pokemon);
    });



}


const getTypeClass = (type) => {
    switch (type) {
        case 'normal':
            return 'normal';
        case 'fire':
            return 'fire';
        case 'water':
            return 'water';
        case 'electric':
            return 'electric';
        case 'grass':
            return 'grass';
        case 'ice':
            return 'ice';
        case 'fighting':
            return 'fighting';
        case 'poison':
            return 'poison';
        case 'ground':
            return 'ground';
        case 'flying':
            return 'flying';
        case 'psychic':
            return 'psychic';
        case 'bug':
            return 'bug';
        case 'rock':
            return 'rock';
        case 'ghost':
            return 'ghost';
        case 'dragon':
            return 'dragon';
        case 'dark':
            return 'dark';
        default:
            return 'unknown';
    }
}

const showPokemonDetails = async (pokemon) => {
    pokemonDetails.innerHTML = '';

    const leftColumn = document.createElement('div');
    leftColumn.classList.add('left-column');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.other['dream_world'].front_default;
    pokemonImage.alt = pokemon.name;

    const details = document.createElement('div');
    details.classList.add('details');
    details.innerHTML = `
        <div class="">
           <h3 class="description-title">${pokemon.name}</h3>
         
           <div class="information">
              <div class="info-items">
                 <span class="title">N°</span>
                 <span class="value">${pokemon.id}</span>
              </div>
              <div class="info-items">
                 <span class="title">Type</span>
                 <span class="value">${pokemon.types[0].type.name}</span>
              </div>
              <div class="info-items">
                 <span class="title">Height</span>
                 <span class="value">${pokemon.height}</span>
              </div>
              <div class="info-items">
                 <span class="title">Weight</span>
                 <span class="value">${pokemon.weight}</span>
              </div>
           </div>
             <h3 class="evolution-title">Evolution</h3>
        </div>
       
    `

  
    leftColumn.appendChild(pokemonImage);
    leftColumn.appendChild(details);

    const rightColumn = document.createElement('div');
    rightColumn.classList.add('right-column');

    const evolutionData = await getEvolutionChain(pokemon.species.url);
    const evolutions = extractEvolutions(evolutionData.chain);

    const evolutionsSection = document.createElement('div');
    evolutionsSection.classList.add('evolutions');
    

    for (const evo of evolutions){
        const evoName = document.createElement('p');
        evoName.innerText = evo.name;

        const evoImage = document.createElement('img');
        evoImage.src = await getPokemonImage(evo.id);

        rightColumn.appendChild(evoImage);
        rightColumn.appendChild(evoName);
    }

   

    pokemonDetails.appendChild(leftColumn);
    pokemonDetails.appendChild(evolutionsSection);
    pokemonDetails.appendChild(rightColumn);

    modal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

const getPokemonImage = async (id) => {
    const pokemon = await getPokemon(id);
    return pokemon.sprites.other['showdown'].front_shiny || pokemon.sprites.front_default  || pokemon.sprites.other['official-artwork'].front_default;
}

const extractEvolutions = (chain) => {
    const evolutions = [];
    let curreentChain = chain;

    do {
        evolutions.push({
            name: curreentChain.species.name,
            id: curreentChain.species.url.split('/').filter(Boolean).pop(),
        });
        curreentChain = curreentChain.evolves_to[0];
    } while (curreentChain);

    return evolutions;
}

loadMoreBtn.addEventListener('click', () => {
    offset += limit;
    loadPokemons(offset, limit);
});


loadPokemons(offset, limit);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});

searchBtn.addEventListener('click', (e) => {
    e.defaultPrevented;
    searchPokemon();
});

window.onload = () => {
    modal.style.display = 'none';
}