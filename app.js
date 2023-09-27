function formatDate(timestamp) {
  let date = newDate(1695500312 * 1000);
  let hours = date.getHours();
  let minutes = date.getMinutes;
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
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  temperatureElement.innerHTML = response.data.temperature.current;
  cityElement.innerHTML = response.data.city;
  humidityElement.innerhtml = response.data.humidity;
  windElement.innerHTML = response.data.wind.speed;
  descriptionElement.innerhtml = response.data.description;
}
let apiKey = "79c3354a9040bfa5a9aaf908co79t5d3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=79c3354a9040bfa5a9aaf908co79t5d3&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
