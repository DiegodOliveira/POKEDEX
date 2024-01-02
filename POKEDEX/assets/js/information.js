const pokemonInformation = document.getElementById('pokemonInformation')


const limit = 1;
let offset = 0

function showMoreInformation(offset, limit){
    PokeAPI.getPokemons(offset,limit).then((pokemon) => {
        const infoHtml = pokemon.map((pokemon) => `
        <h1>${pokemon.name}</h1>
        `).join('')
        pokemonInformation.innerHTML += infoHtml
    })
    
}

showMoreInformation(offset, limit)



