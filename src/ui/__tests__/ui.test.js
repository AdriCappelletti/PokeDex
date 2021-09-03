import { createPokemonCard } from '../ui';
import fixture from '../../__tests__/pokedex.fixture';
import pokemonData from '../../__tests__/pokemon.json';

/// <reference types="Jest"/>

document.body.innerHTML = fixture;
describe('Ui tests', () => {
  it('should create a pokemon card', () => {
    const pokemonIndex = 0;
    const currentPage = 1;
    const pokemonName = pokemonData.results[pokemonIndex].name;

    createPokemonCard(pokemonIndex, pokemonData, currentPage);
    expect(document.querySelectorAll('.pokemons-container__pokemon')).toHaveLength(1);
    expect(document.querySelector('.pokemons-container__pokemon').id).toBe(pokemonName);
  });
});
