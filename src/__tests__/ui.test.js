import { goPrevPage, goNextPage } from '../ui';
import pokedexDocument from './pokedex.fixture';

/// <reference types="Jest"/>

document.body.innerHTML = pokedexDocument;
describe('UI pagination tests', () => {
  const updatePrevPaginationInfo = jest.fn(() => 1);
  const handlePokemonData = jest.fn();

  it('should go to prev page', () => {
    goPrevPage();
    expect(updatePrevPaginationInfo).toHaveBeenCalledWith(1);
    expect(handlePokemonData).toHaveBeenCalledWith(1);
  });
});
