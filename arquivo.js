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
    const pokemon = await res.json();
    criarpokemonCard(pokemon);
    
}

fetch_pokemons()

function criarpokemonCard(pokemon) {
    const item_Pokemon = document.createElement('div');
    item_Pokemon.classList.add('pokemon');

    const poke_types = pokemon.types.map(el => el.type.name)

    const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const pokeInnerHTML = `
        <div class="info">
            <h3 class="number">Pokémon Nº: ${pokemon.id}</h3>
            <img class="img-container" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
            <p>${poke_types}<p>
           <h2 class="name">${pokemon.name}</h2>
        </div>
    `;

    item_Pokemon.innerHTML = pokeInnerHTML;

    conteiner.appendChild(item_Pokemon);
}


