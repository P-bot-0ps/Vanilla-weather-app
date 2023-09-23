function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = response.data.temperature;
  cityElement.innerHTML = response.data.city;
}
let apiKey = "79c3354a9040bfa5a9aaf908co79t5d3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=79c3354a9040bfa5a9aaf908co79t5d3&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
