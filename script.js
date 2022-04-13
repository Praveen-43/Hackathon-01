// <h1>Pokemon's</h1>
let heading=document.createElement("h1")
heading.innerHTML=" THE 50 POKEMON'S";
document.body.append(heading);

// <div id="pokemon_container"></div>
let div1=document.createElement("div");
div1.setAttribute("id", "pokemon_container");
document.body.append(div1);


var pokemon_container = document.getElementById('pokemon_container');
var cardsToDisplay = 50;

var fetchPokemons = async () => {
    for (let i = 1; i <= cardsToDisplay; i++) {
        await getCardDetails(i);
    }
};

var getCardDetails = async id => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        createPokemonCard(pokemon);
        console.log(pokemon);
    } catch (error) {
        console.log(error);
    }
};

function createPokemonCard(pokemon) {
    var Mypokemon = document.createElement('div');
    Mypokemon.classList.add('pokemon');

    //Display 50 pokemons.
    var name = pokemon.name.toUpperCase();
    console.log(name);


    //Abilities of Pokemon.
    var pokemons_abilities = pokemon.abilities.map(ability => ability.ability.name);
    console.log(pokemons_abilities);


    //Pokemon’s moves.
    var moves = pokemon.moves.map(move => move.move.name);
    let temp = [];
    for (let i = 0; i < 5; i++) {
        temp.push(moves[i]);
    }
    console.log(temp.join(","));

    //Weight of the Pokemon.
    var weight = pokemon.weight;
    console.log(weight);


    var pokeInnerHTML = `
        <div class="card-part">
        </div>
        <div>
            <h2 class="name"> ${name}</h2>
        </div>
        <div class="info">
		<div><b>Ability = </b> ${pokemons_abilities}</div>
		<div><b>Moves = </b> ${temp}</div>
		<div><b>Weight = </b> ${weight}</div>
        </div>`;

    Mypokemon.innerHTML = pokeInnerHTML;

    pokemon_container.appendChild(Mypokemon);

}

fetchPokemons();