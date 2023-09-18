function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.weather[0].description;
}
let apiKey = "79c3354a9040bfa5a9aaf908co79t5d3";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
