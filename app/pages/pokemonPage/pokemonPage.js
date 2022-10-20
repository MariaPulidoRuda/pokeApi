import "./pokemonPage.css"

export const pokemonPage = async () => {
  catchPokemon();
  const app = document.querySelector("#app");
  app.innerHTML = `
        <p class="greeting">Are you ready for POKEAPI ${name}?</p>
        
    `;
};

export const divPokemon = () => {
  return `
    <div class="containerPokemon" id="containerPokemon"></div>
    `;
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
      type: item.types[0].type.name,
      name: item.name,
      weight: item.weight,
      height: item.height,
    }));
    printPokemon(mappedPokemon);
  }
  function printPokemon(list) {
    const container = document.querySelector("#app");
    container.innerHTML += divPokemon();
    for (const item of list) {
      console.log(item);
      const template = `
            <figure class="figurePokemon">
                <h2 class="name-pokemon" style="text-transform:uppercase">${item.name} ➾ ${item.type}</h2>
                <h3 class="info-pokemon">Weight ⇾ ${item.weight}</h3> 
                <h3 class="info-pokemon">Height ⇾ ${item.height}</h3> 
                <img class="image-pokemon" src="${item.image}" alt="${item.height}"/>
            </figure>
            `;
      const box = document.querySelector("#containerPokemon");
      box.innerHTML += template;
    }
  }
};
