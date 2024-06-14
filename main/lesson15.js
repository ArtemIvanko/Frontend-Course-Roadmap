const storage = JSON.parse(localStorage.getItem("storage")) || [];

const list = document.createElement("ul");
document.body.appendChild(list);

const input = document.createElement("input");
document.body.appendChild(input);

const addButton = document.createElement("button");
addButton.textContent = "Add";
document.body.appendChild(addButton);

function addItemToDOM(item) {
  const li = document.createElement("li");
  li.textContent = item;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    const index = storage.indexOf(item);
    if (index > -1) {
      storage.splice(index, 1);
    }
    li.remove();
    localStorage.setItem("storage", JSON.stringify(storage));
  });
  li.appendChild(removeButton);

  list.appendChild(li);
}

addButton.addEventListener("click", function () {
  const item = input.value.trim();
  if (item) {
    storage.push(item);
    addItemToDOM(item);
    input.value = "";
    localStorage.setItem("storage", JSON.stringify(storage));
  }
});

window.addEventListener("load", function () {
  storage.forEach(addItemToDOM);
});
