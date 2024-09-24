const startButton = document.createElement("button");
startButton.textContent = "Start";
document.body.appendChild(startButton);

const stopButton = document.createElement("button");
stopButton.textContent = "Stop";
document.body.appendChild(stopButton);

const clockBlock = document.createElement("div");
document.body.appendChild(clockBlock);

const hoursBlock = document.createElement("span");
hoursBlock.textContent = "00";
clockBlock.appendChild(hoursBlock);

const colonBlock = document.createElement("span");
colonBlock.textContent = ":";
clockBlock.appendChild(colonBlock);

const minutesBlock = document.createElement("span");
minutesBlock.textContent = "00";
clockBlock.appendChild(minutesBlock);

const colonBlock2 = document.createElement("span");
colonBlock2.textContent = ":";
clockBlock.appendChild(colonBlock2);

const secondsBlock = document.createElement("span");
secondsBlock.textContent = "00";
clockBlock.appendChild(secondsBlock);

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    hoursBlock.textContent = hours < 10 ? `0${hours}` : hours;
    minutesBlock.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsBlock.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }, 20);
}

function stopTimer() {
  clearInterval(timerId);
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
