import { handleCardClick, goNextPage, goPrevPage } from './ui.js';
import {
  handlePokemonData,
} from './helper.js';

async function setupAppHandler() {
  handlePokemonData();
  handleCardClick();
}

async function paginationHandler() {
  goPrevPage();
  goNextPage();
}

setupAppHandler();
paginationHandler();
