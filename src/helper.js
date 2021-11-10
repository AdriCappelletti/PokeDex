import {
  createPokemonCard, overWriteCardFront, getInputText, highLightPokemon,
} from './ui/ui.js';
import { fetchApi } from './api.js';

let clickCounter = 0;
let currentOffset = 0;
const maxAmountOfpages = 44;
let cardsCreated = false;

export const handlePokemonData = async (pokemonData) => {
  pokemonData = await fetchApi(currentOffset);
  for (let i = 0; i < pokemonData.results.length; i += 1) {
    const pokemonName = pokemonData.results[i].name;
    // checkPokemonIsFetched(pokemonName);
    const keys = Object.keys(pokemonData.results);
    const index = Number(keys[i]);
    if (cardsCreated) {
      overWriteCardFront(currentOffset, index, pokemonData);
    } else {
      createPokemonCard(index, pokemonData, cardsCreated, currentOffset);
    }
  }
  cardsCreated = true;
};

export const updateNextPaginationInfo = () => {
  if (clickCounter < maxAmountOfpages && clickCounter >= 0) {
    clickCounter += 1;
    currentOffset += 20;
    return currentOffset;
  }
  return false;
};

export const updatePrevPaginationInfo = () => {
  if (clickCounter > 0) {
    clickCounter -= 1;
    currentOffset -= 20;
    return currentOffset;
  }
  return false;
};

const fetchedPokemons = [];

export const checkPokemonIsFetched = (pokemonName) => {
  const pokemonExist = fetchedPokemons.includes(pokemonName);
  if (!pokemonExist) {
    fetchedPokemons.push(pokemonName);
    return false;
  } return pokemonExist
};

export const searchPokemon = () => {
  document.querySelector('#search-pokemon').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const pokemonName = getInputText('#search-pokemon');
      const pokemonExist = checkPokemonIsFetched(pokemonName);
      if (pokemonExist) {
        highLightPokemon(pokemonName);
      }
      if (!pokemonExist) {
        const pokemonData = fetchApi(pokemonName);
        createPokemonCard(pokemonName, pokemonData);
      }
    }
  });
};
