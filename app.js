function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  let(minutes < 10);
  minutes = `0${minutes}`;

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
function getforecast(coordinates) {
  console.log(coordinates);
  let apiKey = "79c3354a9040bfa5a9aaf908co79t5d3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon={lon}&lat={lat}&{key}
  &units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}
let forecastElement = document.querySelector("#forecast");
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let forecastHTML = `<div class="row">`;
days.forEach(function (day) {
  forecastHTML =
    forecastHTML +
    `
  <div class="col-2">
  div class="weather-forecast-date">$(day)</div>
  <img
  src=""
  alt=""
  width="42"
  />
  <div class="weathr-forecast-temperatures">
  <span class="weather-forecast-temperature-max"> 18 </span>
  <span class="weather-forecast-temperature-min"> 12 </span>
  </div>
  </div>
  `;
});
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");
  let celsiusTemperature = response.data.temperature.current;
  let iconElement = document.querySelector("#icon");
  temperatureElement.innerHTML = response.data.temperature.current;
  cityElement.innerHTML = response.data.city;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  descriptionElement.innerHTML = response.data.condition.description;
  dateElement.innerHTML = formatDate(response.data.temperature.time * 1000);
  iconElement.setAttribute(
    "src"`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night${response.data.condition.icon_url}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

let apiKey = "79c3354a9040bfa5a9aaf908co79t5d3";
let city = "Los Angeles";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=79c3354a9040bfa5a9aaf908co79t5d3&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}
search("");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", celsiusTemperature);
