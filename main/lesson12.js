const setLink = document.createElement("button");
setLink.innerText = "Set link";
document.body.appendChild(setLink);

const goToLink = document.createElement("button");
goToLink.innerText = "Go to link";
document.body.appendChild(goToLink);

setLink.onclick = () => {
  let link = prompt("Enter link");
  localStorage.setItem("link", link);
};

goToLink.onclick = () => {
  let link = localStorage.getItem("link");
  window.location = link;
};

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
