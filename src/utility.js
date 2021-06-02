const $pokemonsContainer = document.querySelector(".pokemons-container");

function createPokemonFront(index, pokemonData) {
  let pokemonIndex = Number(index);
  let pokemonName = pokemonData.results[pokemonIndex].name;
  if (currentPage >= 20) {
    overWriteCards(pokemonIndex, pokemonName);
  } else {
    let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      pokemonIndex + 1 + currentPage
    }.png`;
    const $pokemonContainer = document.createElement("div");
    const $cardFront = document.createElement("div");
    let $pokemonImg = document.createElement("img");
    let $pokemonNameParagraph = document.createElement("p");
    $pokemonContainer.className = "pokemons-container__pokemon";
    $cardFront.className = "pokemon__front";
    $pokemonImg.className = "front__img";
    $pokemonNameParagraph.className = "front__name";
    $cardFront.classList.add(pokemonName);
    $pokemonImg.src = pokemonImg;
    $pokemonNameParagraph.textContent = pokemonName;
    $cardFront.appendChild($pokemonImg);
    $cardFront.appendChild($pokemonNameParagraph);
    $pokemonContainer.appendChild($cardFront);
    $pokemonsContainer.appendChild($pokemonContainer);
  }
}

const overWriteCards = (pokemonIndex, pokemonName) => {
  const $pokemonImg = document.querySelectorAll(".front__img");
  const $pokemonName = document.querySelectorAll(".front__name");
  $pokemonImg[pokemonIndex].src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPage+pokemonIndex +1}.png`;
  $pokemonName[pokemonIndex].textContent = pokemonName;
};
