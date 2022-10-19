import { randomColor } from "../utils/randomColors";
import "../style.css";

export const btnChanger = () => {
  const themeBtn = document.createElement("button");
  themeBtn.innerText = "🎨";
  themeBtn.id = "themeBtn";
  const header = document.querySelector("header");
  header.appendChild(themeBtn);
  themeBtn.addEventListener("click", randomColor);

};