const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";

for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const td = document.createElement("td");
    td.style.border = "1px solid black";
    td.style.padding = "5px";
    td.style.textAlign = "center";
    td.textContent = i * j;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

document.body.appendChild(table);

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

const imgBox = document.createElement("div");
imgBox.style.width = "200px";
imgBox.style.height = "200px";
imgBox.style.border = "1px solid black";
document.body.appendChild(imgBox);

const img = document.createElement("img");
img.src = `./assets/${Math.floor(Math.random() * 5) + 1}.png`;
img.style.width = "100%";
img.style.height = "100%";
imgBox.appendChild(img);
