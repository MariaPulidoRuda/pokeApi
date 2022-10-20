export const pokemonPage = async () => {
    catchPokemon();
  const app = document.querySelector("#app");
  app.innerHTML = `
        <p class="greeting">Are you ready for POKEAPI ${name}?</p>
        
    `
};

  export const divPokemon = () => {
    return `
    <div class="containerPokemon" id="containerPokemon"></div>
    `
  };


const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const catchPokemon = async () => {
    try {
        let pokemon = [];
        for (let i = 1; i < 152; i++) {
            const response = await fetch(`${baseURL}${i}`);
            const dataJson = await response.json();
            pokemon.push(dataJson);
        }
        transformData(pokemon);
    } catch (error) {
        console.log(error);
    }
    function transformData(list) {
        const mappedPokemon = list.map((item) => ({
            image: item.sprites.other.home.front_default,
            name: item.types[0].type.name,
            weight: item.height,
            height: item.height,
        }));
printPokemon(mappedPokemon);
    }
    function printPokemon(list) {
        const container = document.querySelector("#app");
        container.innerHTML = divPokemon();
        for (const item of list) {
            console.log(item);
            const template = `
            <figure>
                <h2 class="name-pokemon">${item.name} - ${item.type}</h2>
                <h3 class="info-pokemon">${item.weight} alt=${item.height}/></h3> 
                <img class="image-pokemon" src="${item.image}"/>
            </figure>
            `;
            const box = document.querySelector("#containerPokemon");
            box.innerHTML += template;
        }

    }
};
