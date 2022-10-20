export const pokemonPage = () => {
  const app = document.querySelector("#app");
  app.innerHTML = `
        <p class="greeting">Are you ready for POKEAPI ${name}?</p>
        `;
};

const baseURL = "https://pokeapi.co/api/v2/pokemon/";


//aquí iria lo del fecth