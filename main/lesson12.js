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
