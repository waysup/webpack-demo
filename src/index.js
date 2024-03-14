import _ from "lodash";
// import "./style.css";
// import Icon from "./nginx.png";
// import { Data } from "./data.xml";
// import { Notes } from "./data.csv";
import printMe from "./print";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = " Click me and check the console! ";
  btn.onclick = printMe;

  element.appendChild(btn);
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component());
