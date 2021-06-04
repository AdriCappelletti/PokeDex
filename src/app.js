
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $mainContainer = document.querySelector("#pokemons");

let fetchedPokemons = []


const amountOfPokemons = 20;
let clickCounter = 0;
let interactionCounter = 0;
let currentPage = 0;

const fetchApi = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage}`)

    .then((response) => {
        return response.json();
    })
    .then((responseJSON) => {

        handlePokemonData(responseJSON);

        fetchedPokemons = []

    })
    .catch((error) => {
        console.error(error);
    });
};
fetchApi();


const getPokemonInfo = (pokemonName,$card) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
    return response.json();
  }).then((responseJSON)=>{
      setCardBackInfo(responseJSON, $card)
  }).catch((error) =>{
      console.error(error)
  });
};

const handlePokemonData = (pokemonData) => {
  for (let i = 0; i < pokemonData["results"].length; i++) {
    const keys = Object.keys(pokemonData.results);
    let index = keys[i];
    createPokemonCard(index, pokemonData);
  }
};


$btnNext.addEventListener("click", () => {
  interactionCounter += 1;
  clickCounter = clickCounter + 1;
  currentPage = currentPage + 20;
  fetchApi();
});

$btnPrev.addEventListener("click", () => {
  if (clickCounter > 0) {
    clickCounter = clickCounter - 1;
    currentPage = currentPage - 20;
    fetchApi();
  } else if (clickCounter < 1) {
    return "";
  }
});

$mainContainer.addEventListener('click', (e)=>{const $card = e.target.parentNode
    const pokemonName = $card.id
    if (fetchedPokemons.includes(pokemonName)) {
      $card.classList.toggle('flipped')
    }
    else if ($card.classList.contains('pokemons-container__pokemon')) {
      fetchedPokemons.push(pokemonName)

      getPokemonInfo(pokemonName, $card)
      $card.classList.toggle('flipped')
    }})

