const amountOfPokemons = 20;
let currentPage = 0;


const fetchApi = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}?limit=0&offset=${currentPage}`)
    .then((response) => {
        return response.json();
    })
    .then((responseJSON) => {
        createPokemonFront(amountOfPokemons, responseJSON)
    }).catch(error=>{
        console.error(error)
    });
};

const handlePokemons = () =>{
    for (let i = currentPage; i < currentPage + 20; i++) {
        fetchApi(i+1)
    }
}

handlePokemons()

