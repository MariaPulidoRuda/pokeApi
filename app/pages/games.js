import { getUser } from "../utils/getUser";
import "../style.css";
import { pokemonPage } from "./pokemonPage/pokemonPage";


//creamos el botón

export const btnPokeApi = () => {
    const btnPokeMon = document.createElement("button");
    btnPokeMon.innerText = "POKEAPI";
    btnPokeMon.id = "pokeapi";
    const games = document.querySelector(".games");
    //console.log(games)
    games.appendChild(btnPokeMon)
    btnPokeMon.addEventListener("click", pokemonPage); //hacer un contenedor con flex y met
  };

  //creamos la constante GAMES 

export const games = () => {
  const name = getUser();
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="games"><p class="greeting">Welcome ${name}!</p>
    </div>`;

    //llamamos a la función del botón
    btnPokeApi();
};








