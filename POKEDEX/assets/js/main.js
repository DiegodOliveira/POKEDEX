const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 10
let offset = 0;
const maxRecords = 151;


function loadPokemonItens(offset, limit){
    PokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml =  pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src=${pokemon.photo} 
                alt="${pokemon.name}">
            </div>
        </li>
    `).join('')
        pokemonList.innerHTML += newHtml
        })
}

loadPokemonItens(offset, limit)

loadMoreContent.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreContent.parentElement.removeChild(loadMoreContent)
    } else {
        loadPokemonItens(offset, limit)
    }
})
    
document.getElementById('pokemonList').addEventListener('click', function(event){
   const pokemonItem = event.target.closest('.pokemon');
   if (pokemonItem){
    const pokemonId = pokemonItem.getAttribute('pokemon-id');
    window.location.href = `information-pokemon.html?pokemonId=${pokemonId}`
   }
})