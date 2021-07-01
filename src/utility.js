import { createPokemonCard, overWriteCardFront } from './ui.js';
import { fetchApi } from './api.js';

let clickCounter = 0;
let currentPage = 0;
let cardsCreated = false;

export const handlePokemonData = async () => {
  const pokemonData = await fetchApi(currentPage);
  for (let i = 0; i < pokemonData.results.length; i += 1) {
    const keys = Object.keys(pokemonData.results);
    const index = Number(keys[i]);
    if (cardsCreated) {
      overWriteCardFront(currentPage, index, pokemonData);
    } else {
      createPokemonCard(index, pokemonData, cardsCreated, currentPage);
    }
  }
  cardsCreated = true;
};

export const setCardBackInfo = ($card, pokemonInfo) => {
  const $cardBack = $card.childNodes[1];
  const index = $cardBack.id;
  const pokemonName = pokemonInfo.name;
  const pokemonAbility = pokemonInfo.abilities[0].ability.name;
  const pokemonHeight = pokemonInfo.height;
  const pokemonWeight = pokemonInfo.weight;
  const $name = document.querySelectorAll('.name');
  const $ability = document.querySelectorAll('.ability');
  const $height = document.querySelectorAll('.height');
  const $weight = document.querySelectorAll('.weight');

  $name[index].textContent = `name: ${pokemonName}`;
  $ability[index].textContent = `ability: ${pokemonAbility}`;
  $height[index].textContent = `height: ${pokemonHeight}`;
  $weight[index].textContent = `weight: ${pokemonWeight}`;
};

export const flipCard = ($card) => {
  $card.classList.toggle('flipped');
};

export const goNextPage = () => {
  clickCounter += 1;
  currentPage += 20;
};

export const goPrevPage = () => {
  if (clickCounter > 0) {
    clickCounter -= 1;
    currentPage -= 20;
    return true;
  }
  return false;
};
