
const $pokemonsContainer = document.querySelector(".pokemons-container");

function createPokemonCard(index, pokemonData) {
  let pokemonIndex = Number(index);
  let pokemonName = pokemonData.results[pokemonIndex].name;
  const $pokemonCard = document.createElement("div");
  $pokemonCard.className = "pokemons-container__pokemon";

  $pokemonCard.id = pokemonName

  if (interactionCounter >= 1) {
    overWriteCards(pokemonIndex, pokemonName);
  } else {
    createPokemonFront(pokemonIndex, pokemonName, $pokemonCard);
    createPokemonCardBack($pokemonCard, pokemonIndex);
  }
}

const createPokemonFront = (pokemonIndex, pokemonName, $pokemonCard) => {
  let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    pokemonIndex + 1 + currentPage
  }.png`;
  const $cardFront = document.createElement("div");
  let $pokemonImg = document.createElement("img");
  let $pokemonNameParagraph = document.createElement("p");
  $cardFront.className = "pokemon__front";
  $pokemonImg.className = "front__img";
  $pokemonNameParagraph.className = "front__name";

  $pokemonImg.src = pokemonImg;
  $pokemonNameParagraph.textContent = pokemonName;
  $cardFront.appendChild($pokemonImg);
  $cardFront.appendChild($pokemonNameParagraph);
  $pokemonCard.appendChild($cardFront);
  $pokemonsContainer.appendChild($pokemonCard);
};

const createPokemonCardBack = ($pokemonCard, pokemonIndex) => {
  const $cardBack = document.createElement("div");
  $cardBack.className = "pokemon__back";
  $cardBack.id = pokemonIndex
  $pokemonCard.appendChild($cardBack)
  const $nameParagraph = document.createElement("p");
  const $abilityParagraph = document.createElement("p");
  const $heightParagraph = document.createElement("p");
  const $weightParagraph = document.createElement("p");
  $nameParagraph.className = 'name'
  $abilityParagraph.className = 'ability'
  $heightParagraph.className = 'height'
  $weightParagraph.className = 'weight'
  $cardBack.appendChild($nameParagraph)
  $cardBack.appendChild($abilityParagraph)
  $cardBack.appendChild($heightParagraph)
  $cardBack.appendChild($weightParagraph)
};

const setCardBackInfo = (pokemonInfo, $card) => {
  const $cardBack = $card.childNodes[1]
  const index = $cardBack.id
  const $cards = document.querySelectorAll('.pokemon__back')
  
  const pokemonName = pokemonInfo.name;
  const pokemonAbility = pokemonInfo.abilities[0].ability.name;
  const pokemonHeight = pokemonInfo.height;
  const pokemonWeight = pokemonInfo.weight;
  const $name = document.querySelectorAll('.name')
  const $ability = document.querySelectorAll('.ability')
  const $height = document.querySelectorAll('.height')
  const $weight = document.querySelectorAll('.weight')
  $name[index].textContent = `name: ${pokemonName}`;
  $ability[index].textContent = `ability: ${pokemonAbility}`;
  $height[index].textContent = `height: ${pokemonHeight}`;
  $weight[index].textContent = `weight: ${pokemonWeight}`;

};

const overWriteCards = (pokemonIndex, pokemonName) => {
overWriteCardFront(pokemonIndex, pokemonName)

};

const overWriteCardFront = (pokemonIndex, pokemonName)=>{
  const $pokemonCard = document.querySelectorAll('.pokemons-container__pokemon')

  const $pokemonFront = document.querySelectorAll(".pokemon__front");
  const $pokemonImg = document.querySelectorAll(".front__img");
  const $pokemonName = document.querySelectorAll(".front__name");
  $pokemonImg[
    pokemonIndex
  ].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    currentPage + pokemonIndex + 1
  }.png`;
  $pokemonName[pokemonIndex].textContent = pokemonName;

  $pokemonCard[pokemonIndex].id = pokemonName
}

const overWriteCardBack = ()=>{
  const $name = document.querySelectorAll('.name')
  const $ability = document.querySelectorAll('.ability')
  const $height = document.querySelectorAll('.height')
  const $weight = document.querySelectorAll('.weight')
  $nameParagraph.textContent = `name: ${pokemonName}`;
  $abilityParagraph.textContent = `ability: ${pokemonAbility}`;
  $heightParagraph.textContent = `height: ${pokemonHeight}`;
  $weightParagraph.textContent = `weight: ${pokemonWeight}`;
}


