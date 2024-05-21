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
