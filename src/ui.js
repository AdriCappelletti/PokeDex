import { getPokemonInfo } from './api.js';
import {
  checkPokemonIsFetched, updatePrevPaginationInfo, updateNextPaginationInfo, handlePokemonData,
} from './utility.js';

const $paginationContainer = document.querySelector('.pagination');
const $btnPrev = document.querySelector('.btn-prev');
const $btnNext = document.querySelector('.btn-next');

const createPokemonFront = (pokemonIndex, pokemonName, $pokemonCard, currentPage) => {
  const $pokemonsContainer = document.querySelector('.pokemons-container');
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    pokemonIndex + 1 + currentPage
  }.png`;
  const $cardFront = document.createElement('div');
  const $pokemonImg = document.createElement('img');
  const $pokemonNameParagraph = document.createElement('p');
  $cardFront.className = 'pokemon__front';
  $pokemonImg.className = 'front__img';
  $pokemonNameParagraph.className = 'front__name';

  $pokemonImg.src = pokemonImg;
  $pokemonNameParagraph.textContent = pokemonName;
  $cardFront.appendChild($pokemonImg);
  $cardFront.appendChild($pokemonNameParagraph);
  $pokemonCard.appendChild($cardFront);
  $pokemonsContainer.appendChild($pokemonCard);
};

const createPokemonCardBack = ($pokemonCard, pokemonIndex) => {
  const $cardBack = document.createElement('div');
  $cardBack.className = 'pokemon__back';
  $cardBack.id = pokemonIndex;
  $pokemonCard.appendChild($cardBack);
  const $nameParagraph = document.createElement('p');
  const $abilityParagraph = document.createElement('p');
  const $heightParagraph = document.createElement('p');
  const $weightParagraph = document.createElement('p');
  $nameParagraph.className = 'name';
  $abilityParagraph.className = 'ability';
  $heightParagraph.className = 'height';
  $weightParagraph.className = 'weight';
  $cardBack.appendChild($nameParagraph);
  $cardBack.appendChild($abilityParagraph);
  $cardBack.appendChild($heightParagraph);
  $cardBack.appendChild($weightParagraph);
};

export const goPrevPage = () => {
  $btnPrev.addEventListener('click', () => {
    if (updatePrevPaginationInfo()) {
      handlePokemonData();
    }
    return false;
  });
};

export const goNextPage = () => {
  $btnNext.addEventListener('click', (updatePokemonData) => {
    if (updateNextPaginationInfo()) {
      handlePokemonData();
    }
    return false;
  });
};

export function createPokemonCard(index, pokemonData, currentPage) {
  const pokemonIndex = index;
  const pokemonName = pokemonData.results[pokemonIndex].name;
  const $pokemonCard = document.createElement('div');
  $pokemonCard.className = 'pokemons-container__pokemon';
  $pokemonCard.id = pokemonName;
  createPokemonFront(pokemonIndex, pokemonName, $pokemonCard, currentPage);
  createPokemonCardBack($pokemonCard, pokemonIndex);
}

export const focusButton = $paginationContainer.addEventListener('click', (e) => {
  const $btnPrev = document.querySelector('.btn-prev');
  const $btnNext = document.querySelector('.btn-next');
  const selectedBtn = e.target;
  if (selectedBtn.classList.contains('btn-next')) {
    selectedBtn.classList.add('focused');
    $btnPrev.classList.remove('focused');
  } else if (selectedBtn.classList.contains('btn-prev')) {
    selectedBtn.classList.add('focused');
    $btnNext.classList.remove('focused');
  }
});

export const overWriteCardFront = (currentPage, pokemonIndex, pokemonData) => {
  const pokemonName = pokemonData.results[pokemonIndex].name;
  const $pokemonCard = document.querySelectorAll('.pokemons-container__pokemon');
  const $pokemonImg = document.querySelectorAll('.front__img');
  const $pokemonName = document.querySelectorAll('.front__name');
  $pokemonImg[
    pokemonIndex
  ].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    currentPage + pokemonIndex + 1
  }.png`;
  $pokemonName[pokemonIndex].textContent = pokemonName;

  $pokemonCard[pokemonIndex].id = pokemonName;
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

const $mainContainer = document.querySelector('#pokemons');

export const handleCardClick = () => {
  $mainContainer.addEventListener('click', async (e) => {
    const $card = e.target.parentNode;
    const pokemonName = $card.id;
    if (!checkPokemonIsFetched()) {
      setCardBackInfo($card, await getPokemonInfo(pokemonName));
      flipCard($card);
    } else {
      flipCard($card);
    }
  });
};
