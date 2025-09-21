const body = document.body;
const line = ()=>{
    return document.createElement("br");
}

const div = document.createElement("div");
div.id = "div-id";
div.innerHTML = "div-innerHTML";
div.className = "div-className";

const divChild = document.createElement("div");
divChild.id = "divChild-id";
divChild.innerHTML = "divChild-innerHTML";
divChild.className = "divChild-className";

body.append("HelloWorld");
div.appendChild(divChild);
body.append(div);
