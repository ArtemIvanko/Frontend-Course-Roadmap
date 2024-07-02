let weather = document.createElement("div");
weather.classList.add("weather");
document.body.appendChild(weather);

let button = document.createElement("button");
button.innerText = "Update";
document.body.appendChild(button);

button.onclick = function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=50.450001&lon=30.523333&appid=879ecf195872d9bf056d470dc96726d6")
  .then(response => response.json())
  .then(data => {
    weather.innerHTML = `
      <div>Temperature: ${data.main.temp}</div>
      <div>Pressure: ${data.main.pressure}</div>
      <div>Humidity: ${data.main.humidity}</div>
      <div>Wind speed: ${data.wind.speed}</div>
    `;
  })
  .catch(error => {
    weather.innerHTML = `<div>Error fetching weather data: ${error.message}</div>`;
  });
};
