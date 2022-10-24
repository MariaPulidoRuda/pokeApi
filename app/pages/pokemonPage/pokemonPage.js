import "./pokemonPage.css";

export const divPokemon = () => {
  return `
  <input type="text" id="buscador" class="buscador"/>
    <div class="containerPokemon" id="containerPokemon"></div>
    `;
};

export const pokemonPage = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  catchPokemon();
  const container = document.querySelector("#app");
  container.innerHTML += divPokemon();
  document.addEventListener("input", (event) => pokeFilter(event.target.value));
  /*const buscador = document.createElement("input");
  buscador.id = "buscador";
  buscador.classList.add("buscador");
  buscador.type = "text";
  app.appendChild(buscador);
  const $buscador = document.querySelector("#buscador");
  console.log($buscador);*/
  
};



const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let pokemon = [];
const catchPokemon = async () => {
  try {
    
    for (let i = 1; i < 152; i++) {
      const response = await fetch(`${baseURL}${i}`);
      const dataJson = await response.json();
      pokemon.push(dataJson);
    }
    const mappedPokemon = transformData(pokemon);
    printPokemon(mappedPokemon)
  } catch (error) {
    console.log(error);
  } }
  function transformData(list) {
    const mappedPokemon = list.map((item) => ({
      image: item.sprites.other.home.front_default,
      type: item.types[0].type.name,
      name: item.name,
      weight: item.weight,
      height: item.height,
    }));
    //printPokemon(mappedPokemon);
    return mappedPokemon
  }
  function printPokemon(list) {
    
    for (const item of list) {
      //console.log(item);
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
};

function pokeFilter(value) {
const filteredPokemon = pokemon.filter(p=>p.name.toLowerCase().includes(value.toLowerCase()))
console.log(filteredPokemon)

const pokemonContainer = document.querySelector("#containerPokemon")
pokemonContainer.innerHTML = ""
const mappedPokemon = transformData(filteredPokemon);
printPokemon(mappedPokemon)
  /*console.log(pokemonPage());
  const catchPokemon = pokemonPage();
  const mappedPokemon = catchPokemon.filter((item) =>
    item.name.toLowerCase().includes(word.toLowerCase)
  );
  const container = document.querySelector(".containerPokemon");
  container.innerHTML = " ";
  mappedPokemon.forEach((item) => {
    container.innerHTML += figure(item);
  });*/
}
