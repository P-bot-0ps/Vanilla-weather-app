function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  (temperatureElement.innerHTML = response.data.main), temp;
}
let apiKey = "6db6bfa3cf6ed8d7cea0399fd7f5588b";
let apiURL = "";
axios.get(apiURL).then(displayTemperature);
