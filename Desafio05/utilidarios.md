 const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonImage = document.createElement('img');
    pokemonImage.classList.add('pokemon-image');
    pokemonImage.src = pokemon.sprites.other['official-artwork'].front_default;
    pokemonImage.alt = pokemon.name;

    const pokemonInfo = document.createElement('div');
    pokemonInfo.classList.add('pokemon-info');

    const pokemonName = document.createElement('h3');
    pokemonName.classList.add('pokemon-name');
    pokemonName.textContent = pokemon.name;

    pokemonInfo.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonInfo);

    pokemonCard.addEventListener('click', () => showPokemonDetails(pokemon));

    pokemonContainer.appendChild(pokemonCard);



    const leftColumn = document.createElement('div');
    leftColumn.classList.add('left-column');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.other['dream_world'].front_default;
    pokemonImage.alt = pokemon.name;

    const details = document.createElement('div');
    details.classList.add('details');
    details.innerHTML = `
        <div class="pokemon-details">
    <h3 class="description-title">${pokemon.name}</h3>
    <p class="description-text">
        ${pokemon.description}
    </p>
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


     const tipoPrincipal = pokemon.types[0].type.name;
    const tipoClass = getTypeClass(tipoPrincipal);
 

    cardFront.innerHTML = `
          <div>
             <img class="pokemon-image" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">
          </div>
          <div>
             <span>#${pokemon.id.toString().padStart(3, '0')}</span>
          </div>
          <div>
             <span>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
          </div>
          <div>
              <div class="pokemon-type ${tipoClass}">${tipoPrincipal}</div>
          </div>
     
    `   
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    cardBack.innerHTML = `
        <div>
           <h3>${pokemon.name}</h3>
           <p>Altura:${pokemon.height}</p>
           <p>Peso:${pokemon.weight}</p>
           <p>Experiência:${pokemon.base_experience}</p>
           <p>Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
     
    `

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    

    pokemonCard.appendChild(cardInner);

    pokemonCard.addEventListener('click', () => {
        cardInner.classList.toggle('flipped');
    });

    pokemonCard.addEventListener('click', () => {
        showPokemonDetails(pokemon);
    });

    pokemonContainer.appendChild(pokemonCard);


    https://pokeapi.co/api/v2/version/1/