let images = ["./assets/1.png", "./assets/2.png", "./assets/3.png", "./assets/4.png", "./assets/5.png"];
let currentImage = 0;

let slider = document.createElement("div");
slider.classList.add("slider");
document.body.appendChild(slider);

let img = document.createElement("img");
img.src = images[currentImage];
img.style.width = "300px";
img.style.height = "300px";
slider.appendChild(img);

let prev = document.createElement("button");
prev.innerText = "Prev";
slider.appendChild(prev);

let next = document.createElement("button");
next.innerText = "Next";
slider.appendChild(next);

let dots = document.createElement("div");
dots.classList.add("dots");
slider.appendChild(dots);

function updateDots() {
  let allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, i) => {
    if (i === currentImage) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  if (currentImage === 0) {
    prev.style.display = "none";
  } else {
    prev.style.display = "block";
  }

  if (currentImage === images.length - 1) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }
}

for (let i = 0; i < images.length; i++) {
  let dot = document.createElement("span");
  dot.innerText = "•";
  dot.style.cursor = "pointer";
  dot.style.marginRight = "5px";
  dot.style.fontSize = "30px";
  dot.classList.add("dot");
  dots.appendChild(dot);

  dot.addEventListener("click", function () {
    currentImage = i;
    img.src = images[currentImage];
    updateDots();
  });
}

updateDots();

next.addEventListener("click", function () {
  currentImage++;
  img.src = images[currentImage];
  updateDots();
});

prev.addEventListener("click", function () {
  currentImage--;
  img.src = images[currentImage];
  updateDots();
});

