function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  (temperatureElement.innerHTML = response.data.main), temp;
}
let apiKey = "";
let apiURL = "";
axios.get(apiURL).then(displayTemperature);
