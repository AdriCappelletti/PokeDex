import {
  handleCardClick, goNextPage, goPrevPage,
} from './ui/ui.js';
import {
  handlePokemonData, searchPokemon,
} from './helper.js';

async function setupAppHandler() {
  handlePokemonData();
  handleCardClick();
  searchPokemon();
}

async function paginationHandler() {
  goPrevPage();
  goNextPage();
}

setupAppHandler();
paginationHandler();
