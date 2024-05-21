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
