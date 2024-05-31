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

const list = document.createElement("ul");
document.body.appendChild(list);

const input = document.createElement("input");
document.body.appendChild(input);

const addButton = document.createElement("button");
addButton.textContent = "Add";
document.body.appendChild(addButton);

addButton.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = `${input.value}`;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function (e) {
    e.target.parentNode.remove();
  });
  li.appendChild(removeButton);

  list.appendChild(li);
  input.value = "";
});
