const body = document.body;
const div = document.createElement("div");
div.innerHTML = "div-text";
div.id = "div-id";
div.className = "div-class";
const line = document.createElement("br");

const divChild = document.createElement("divChild");
divChild.innerHTML = "divChild-text";
divChild.id = "divChild-id"
divChild.className = "divCHild-class";

div.appendChild(line);
div.appendChild(divChild);

body.append("Hello World!");
body.appendChild(div);