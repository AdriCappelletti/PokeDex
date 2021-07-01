import { getPokemonInfo } from './api.js';
import {
  handlePokemonData,
  setCardBackInfo,
  goNextPage,
  goPrevPage,
  flipCard,
} from './utility.js';

const $mainContainer = document.querySelector('#pokemons');
const $btnPrev = document.querySelector('.btn-prev');
const $btnNext = document.querySelector('.btn-next');

function appHandler() {
  handlePokemonData();
  const fetchedPokemons = [];

  $mainContainer.addEventListener('click', async (e) => {
    const $card = e.target.parentNode;
    const pokemonName = $card.id;

    if (!fetchedPokemons.includes(pokemonName)) {
      fetchedPokemons.push(pokemonName);
      const pokemonInfo = await getPokemonInfo(pokemonName);
      setCardBackInfo($card, pokemonInfo);
      flipCard($card);
    } else if (fetchedPokemons.includes(pokemonName)) {
      flipCard($card);
    }
  });

  $btnNext.addEventListener('click', () => {
    goNextPage();
    handlePokemonData();
  });

  $btnPrev.addEventListener('click', () => {
    if (goPrevPage()) {
      handlePokemonData();
    }
  });
}

appHandler();

// Swal.fire({
//   icon: 'error',
//   title: 'Oops...',
//   text: 'Something went wrong!',
//   footer: '<a href="">Why do I have this issue?</a>',
// });
