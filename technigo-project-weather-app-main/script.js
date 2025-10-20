const todaysContainer = document.getElementById("today-container");
const todaysTemperatureContainer = document.getElementById("temp-container");
const cityContainer = document.getElementById("city-container");
const weatherDescriptionContainer = document.getElementById("description-container");
const sunriseSunsetContainer = document.getElementById("Sunrise-Sunset-container");


roundToInteger = (number) => {
  return Math.round(number);
};

const fetchData =  async () => {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=798eeac13b738f9ebfbf936c1e8564a9");
    if(!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    };
    const data = await response.json();
    console.log(data);

    // Get todays temp rounded
    const todaysTemperature = document.createElement("span");
    const todaysTemperatureRounded = roundToInteger(data.main.temp);
    todaysTemperature.textContent = `${todaysTemperatureRounded}°C`

    // Get city
    const city = document.createElement("span");
    city.textContent = `${data.name}`;

    // Get Weather description
    const weatherDescription = document.createElement("span");
    weatherDescription.textContent = `${data.weather[0].main}`;

    // Get sunrise and sunset
    const sunrise = document.createElement("span");
    const sunset = document.createElement("span");
    
    // Convert to seconds and format to "00:00"
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunrise.textContent = `Sunrise: ${sunriseTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    })}`;
    sunset.textContent = `Sunset: ${sunsetTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    })}`;

    // Append Children
    todaysTemperatureContainer.appendChild(todaysTemperature);
    cityContainer.appendChild(city);
    weatherDescriptionContainer.appendChild(weatherDescription);
    sunriseSunsetContainer.appendChild(sunrise);
    sunriseSunsetContainer.appendChild(sunset);


  } catch (error) {
    console.log(`Error occured!`, error);
  }

}
fetchData();

const sunriseTime = 1760938645 * 1000;
const sunrise = new Date(sunriseTime);

console.log(sunrise);