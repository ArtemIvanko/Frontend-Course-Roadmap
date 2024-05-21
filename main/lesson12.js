const root = document.createElement("div");
document.body.appendChild(root);

const button1 = document.createElement("button");
button1.innerText = "Button 1";
root.appendChild(button1);

const button2 = document.createElement("button");
button2.innerText = "Button 2";
root.appendChild(button2);

const button3 = document.createElement("button");
button3.innerText = "Button 3";
root.appendChild(button3);

root.addEventListener("click", (event) => {
  alert(event.target.innerText);
});
