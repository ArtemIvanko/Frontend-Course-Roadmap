const text = document.createElement("div");
text.innerText = "Hello World";
document.body.appendChild(text);

const button = document.createElement("button");
button.innerText = "Change color";
document.body.appendChild(button);

let color = true;

button.onclick = () => {
  if (color) {
    text.style.color = "red";
    color = false;
  } else {
    text.style.color = "black";
    color = true;
  }
};
