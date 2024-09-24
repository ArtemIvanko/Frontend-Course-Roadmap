const timer = document.createElement("div");
document.body.appendChild(timer);

let time = 85;

let interval = setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timer.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  time--;

  if (time < 0) {
    clearInterval(interval);
  }
}, 1000);
