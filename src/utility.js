const $pokemonsContainer = document.querySelector('.pokemons-container')


function createPokemonFront(amountOfPokemons, pokemonData){
    let pokemonImg = pokemonData.sprites.front_default
    let pokemonName = pokemonData.name
    const $pokemonContainer = document.createElement('div')
    const $cardFront = document.createElement('div')
    let $pokemonImg = document.createElement('img')
    let $pokemonNameParagraph = document.createElement('p')
    $pokemonContainer.className = 'pokemons-container__pokemon'
    $cardFront.className = 'pokemon__front'
    $pokemonImg.src = pokemonImg
    $pokemonNameParagraph.textContent = pokemonName
    $cardFront.appendChild($pokemonImg)
    $cardFront.appendChild($pokemonNameParagraph)
    $pokemonContainer.appendChild($cardFront)
    $pokemonsContainer.appendChild($pokemonContainer)    
}

