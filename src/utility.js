const $pokemonsContainer = document.querySelector('.pokemons-container')


function createPokemonFront(amountOfPokemons){
    const $pokemonContainer = document.createElement('div')
    $pokemonContainer.className = 'pokemons-container__pokemon'
    let $pokemonImg = document.createElement('img')
    let $pokemonNameParagraph = document.createElement('p')
    $pokemonImg.src = pokemonImg
    $npokemonNameParagraph = pokemonName
    $pokemonContainer.appendChild($pokemonImg)
    $pokemonContainer.appendChild($pokemonName)
    $pokemonsContainer.appendChild($pokemonContainer)    
}

