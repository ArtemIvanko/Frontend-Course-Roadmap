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
