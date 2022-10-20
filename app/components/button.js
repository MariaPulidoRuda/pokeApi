import { randomColor } from "../utils/randomColors";
import "../style.css";

//themeBtn para estilo CSS (cambiador de color)

export const btnChanger = () => {
  const themeBtn = document.createElement("button");
  themeBtn.innerText = "Change the color 🎨";
  themeBtn.id = "themeBtn";
  const header = document.querySelector("header");
  header.appendChild(themeBtn);
  themeBtn.addEventListener("click", randomColor);

};

// el botón está en el header porque siempre se va a mostrar en todas las páginas. si queremos que esté en una página específica
//habrá que especificarlo. t