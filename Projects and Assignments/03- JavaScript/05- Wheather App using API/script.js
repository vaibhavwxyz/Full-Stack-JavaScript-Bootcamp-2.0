const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter the City Name");
    return;
  }

  const city = inputBox.value;

  // fetching data
  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=1622a272001f4c0d906110000231102&q=${city}`
  );

  const orgData = await fetchData.json();
  let data = orgData;
  console.log(data);

  // displaying the data
  countryName.innerText = data.location.country;
  stateName.innerText = data.location.region;
  cityName.innerText = data.location.name;
  humidity.innerText = data.current.humidity;
  windSpeed.innerText = data.current.wind_kph;
  temprature.innerText = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerText = data.current.condition.text;
};
