


// ------ > IGNORA ESSE ARQUIVO, ESTAVA TESTANDO OUTRAS OPÇÕES  <--------


const nome = document.querySelector('#name')

nome.addEventListener('blur', (e)=>{

})


//--------------------------------------------------------------------------

let container = document.getElementById('conteiner')


function consultarPokemon(id, num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response){
        response.json()
            .then(function (pokemon){
            criarPokemon(pokemon, num)
            })

    })
    .catch(function (erro){
        console.log("Erro: " + erro)
    })
}

function digitarPokemon() {
    let pokemonId = //o que tiver no meu input
    consultarPokemon(pokemonId, 1)
}





function criarPokemon(pokemon, num){
    const procurar = document.querySelector('#name')


    let item = container.querySelector('#poke')
    let imagem = item.getElementsByTagName('img')[0]
    imagem.setAttribute('src', pokemon.sprites.front_default)

    let nome = item.getElementsByTagName('h3')[0]
    nome.textContent = pokemon.name

    let tipo = item.getElementsByTagName('p')[0]
    tipo.textContent = pokemon.
}

digitarPokemon()


