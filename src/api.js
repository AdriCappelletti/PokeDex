export const fetchApi = (currentPage) => {
  try {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage}`)
      .then((response) => response.json())
      .then((responseJSON) => responseJSON);
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonInfo = (pokemonName) => {
  try {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => response.json()).then((responseJSON) => responseJSON);
  } catch (error) {
    console.error(error);
  }
};
