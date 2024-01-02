
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        pokemonId: params.get('pokemonId')
    };
}

function displayPokemonDetails(pokemon) {
    const detailsContainer = document.getElementById('pokemonInformation');
    detailsContainer.innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
        <h2>Habilidades</h2>
        <ul>
            ${pokemon.abilities.map(ability => `<li>${ability}</li>`).join('')}
        </ul>
    `;
}

displayPokemonDetails

const { pokemonName } = getQueryParams();

if (pokemonName) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    PokeAPI.getPokemonDetail({ url: pokemonUrl })
        .then(displayPokemonDetails)
        .catch(error => console.error('Erro ao carregar detalhes do Pokémon:', error));
}
