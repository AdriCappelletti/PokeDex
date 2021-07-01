import { handleCardClick, goNextPage, goPrevPage } from './ui.js';
import {
  handlePokemonData,
} from './utility.js';

async function appHandler() {
  handlePokemonData();
  handleCardClick();
}

async function paginationHandler() {
  goPrevPage();
  goNextPage();
}

appHandler();
paginationHandler();
