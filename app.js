function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main, temp);
  cityElement.innerHTML = response.data.name;
}
let apiKey = "79c3354a9040bfa5a9aaf908co79t5d3";
let apiURL =
  "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";
axios.get(apiURL).then(displayTemperature);
