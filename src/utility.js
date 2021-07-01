import { createPokemonCard, overWriteCardFront } from './ui.js';
import { fetchApi } from './api.js';

let clickCounter = 0;
let currentPage = 0;
const maxAmountOfpages = 44;
let cardsCreated = false;

export const handlePokemonData = async (pokemonData) => {
  pokemonData = await fetchApi(currentPage);
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

export const updateNextPaginationInfo = () => {
  if (clickCounter < maxAmountOfpages && clickCounter >= 0) {
    clickCounter += 1;
    currentPage += 20;
    return currentPage;
  }
  return false;
};

export const updatePrevPaginationInfo = () => {
  if (clickCounter > 0) {
    clickCounter -= 1;
    currentPage -= 20;
    return currentPage;
  }
  return false;
};

const fetchedPokemons = [];

export const checkPokemonIsFetched = (pokemonName) => {
  if (!fetchedPokemons.includes(pokemonName)) {
    fetchedPokemons.push(pokemonName);
    return false;
  } if (fetchedPokemons.includes(pokemonName)) {
    return true;
  }
};
