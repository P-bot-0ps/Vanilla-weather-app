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

  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    return `${day} ${hours}:${minutes}`;
  }
}
function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "6db6bfa3cf6ed8d7cea0399fd7f5588b";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid={"6db6bfa3cf6ed8d7cea0399fd7f5588b"}&units=metric`;

console.log(apiURL);
axios.get(apiURL).then(displayTemperature);

descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = FormDate(response.data.dt * 1000);
iconElement.setA;
