import { home } from "../pages/home";

export const user = () => {
 const app = document.querySelector("#app");

 app.innerHTML = `
   <div class="containerUser">
      <h1 class="title">NEOLAND</h1>
      <p><h1>HUB-GAMES</h1></p>
       <h2 class="inputUserName">Enter your name</h2>
       <input type="text" id="inputUserName">
       <button id="btnUserName">👌</button>
     </div>
         `;

  const localUserName = () => {
   localStorage.setItem("userName", input.value);
   home();
  };

 export const home = () =>{
   const app = document.querySelector('#app');
  }

 const btnUserName = document.querySelector("#btnUserName");
  const input = document.querySelector("input");
 btnUserName.addEventListener("click", () => localUserName(input.value)); 
 };