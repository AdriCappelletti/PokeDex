const $btnNext = document.querySelector('.btn-next')
const amountOfPokemons = 20;
let currentPage = 0;


const fetchApi = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage}`)
    .then((response) => {
        return response.json();
    })
    .then((responseJSON) => {
        handlePokemonData(responseJSON)
    }).catch(error=>{
        console.error(error)
    });
};

const handlePokemonData = (pokemonData) =>{
    for (let i = 0; i < pokemonData["results"].length; i++) {
        const keys = Object.keys(pokemonData.results)
        let index = keys[i]
        createPokemonFront(index,pokemonData) 
    }
}

fetchApi()


$btnNext.addEventListener('click', ()=>{
    currentPage= currentPage+20
    fetchApi()
})

