
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
    createPokemonCardBack($pokemonCard);
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

const createPokemonCardBack = ($pokemonCard) => {
  const $cardBack = document.createElement("div");
  $cardBack.className = "pokemon__back";
  $pokemonCard.appendChild($cardBack)
};

const setCardBackInfo = (pokemonInfo, $card) => {
  // const $cardsBack = document.querySelectorAll(".pokemon__back");
  const $cardBack = $card.childNodes[1]
  const pokemonName = pokemonInfo.name;
  const pokemonAbility = pokemonInfo.abilities[0].ability.name;
  const pokemonHeight = pokemonInfo.height;
  const pokemonWeight = pokemonInfo.weight;
  const $nameParagraph = document.createElement("p");
  const $abilityParagraph = document.createElement("p");
  const $heightParagraph = document.createElement("p");
  const $weightParagraph = document.createElement("p");
  $nameParagraph.textContent = `name: ${pokemonName}`;
  $abilityParagraph.textContent = `ability: ${pokemonAbility}`;
  $heightParagraph.textContent = `height: ${pokemonHeight}`;

  $weightParagraph.textContent = `weight: ${pokemonWeight}`;

  $cardBack.appendChild($nameParagraph);
  $cardBack.appendChild($abilityParagraph);
  $cardBack.appendChild($heightParagraph);
  $cardBack.appendChild($weightParagraph);
};

const overWriteCards = (pokemonIndex, pokemonName) => {

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
};


