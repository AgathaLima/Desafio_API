const conteiner = document.getElementById('conteiner');
const numeros_pokemon = 150;


const fetch_pokemons = async () => {
    for (let i = 1; i <= numeros_pokemon; i++) {
        await pegarPokemon(i);
    }
}

const pegarPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = res.json();
    criarpokemonCard(pokemon);
    
}

fetch_pokemons()

function criarpokemonCard(pokemon) {
    const item_Pokemon = document.createElement('div');
    item_Pokemon.classList.add('pokemon');

    const pokeInnerHTML = `
        ${pokemon.id} 
    `;

    item_Pokemon.innerHTML = pokeInnerHTML;

    conteiner.appendChild(item_Pokemon);
}

