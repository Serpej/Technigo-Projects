const todaysContainer = document.getElementById("today-container");
const todaysTemperatureContainer = document.getElementById("temp-container");
const cityContainer = document.getElementById("city-container");
const weatherDescriptionContainer = document.getElementById("description-container");
const sunriseSunsetContainer = document.getElementById("sunrise-sunset-container");
const futureDaysContainer = document.getElementById("future-forecast-container");
const todaysIconContainer = document.getElementById("todays-weather-icon-container");
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weatherIcons = ["http://openweathermap.org/img/wn/01d@2x.png", "http://openweathermap.org/img/wn/01n@2x.png", "http://openweathermap.org/img/wn/02d@2x.png", "http://openweathermap.org/img/wn/02n@2x.png","http://openweathermap.org/img/wn/03d@2x.png", "http://openweathermap.org/img/wn/04n@2x.png", "http://openweathermap.org/img/wn/09n@2x.png", "http://openweathermap.org/img/wn/10d@2x.png", "http://openweathermap.org/img/wn/10n@2x.png", "http://openweathermap.org/img/wn/11n@2x.png", "http://openweathermap.org/img/wn/13n@2x.png", "http://openweathermap.org/img/wn/50n@2x.png"];

//weatherIcons = ["./assets/sun.png", "./assets/moon.png", "./assets/cloudySun.png", "./assets/cloudyMoon.png","./assets/scatteredClouds.png", "/.assets/brokenClouds.png", "/.assets/showerRain.png", "/.assets/sunRain.png", "/.assets/moonRain.png", "/.assets/thunderstorm.png", "/.assets/snow.png", "/.assets/mist.png"];

roundToInteger = (number) => {
  return Math.round(number);
};

const fetchDataTodaysForecast =  async () => {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=798eeac13b738f9ebfbf936c1e8564a9");
    if(!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    };
    const data = await response.json();

    // Get todays temp rounded
    const todaysTemperature = document.createElement("span");
    todaysTemperature.id = "temperature";
    const todaysTemperatureRounded = roundToInteger(data.main.temp);
    const tempUnit = document.createElement("span");
    tempUnit.id = "temp-unit"

    todaysTemperature.textContent = `${todaysTemperatureRounded}`
    tempUnit.textContent = "°C"

    // Get city
    const city = document.createElement("span");
    city.id = "city";
    city.textContent = `${data.name}`;

    // Get Weather description
    const weatherDescription = document.createElement("span");
    weatherDescription.id = "description";
    const currentWeather = data.weather[0].main;
    weatherDescription.textContent = `${currentWeather}`;

    // Get sunrise and sunset
    const sunrise = document.createElement("span");
    const sunset = document.createElement("span");
    sunrise.id = "sunrise";
    sunset.id = "sunset";
    
    // Convert to seconds and format to "00:00"
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunriseTimeTwoDigits = sunriseTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
    sunsetTimeTwoDigits = sunsetTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });

    sunrise.textContent = `Sunrise: ${sunriseTimeTwoDigits}`;
    sunset.textContent = `Sunset: ${sunsetTimeTwoDigits}`;

    // Get weather icon
    const todaysIconImage = document.createElement("img");
    const currentHour = new Date(data.dt).getHours();
    const sunriseHour = sunriseTime.getHours();
    const sunsetHour = sunsetTime.getHours();
    const currentIcon = getWeatherIcon(currentWeather, currentHour, sunriseHour, sunsetHour);
    todaysIconImage.src = currentIcon;
    todaysIconImage.alt = ""
    

    // Append Children
    todaysTemperatureContainer.appendChild(todaysTemperature);
    todaysTemperatureContainer.appendChild(tempUnit);
    todaysIconContainer.appendChild(todaysIconImage);
    cityContainer.appendChild(city);
    weatherDescriptionContainer.appendChild(weatherDescription);
    sunriseSunsetContainer.appendChild(sunrise);
    sunriseSunsetContainer.appendChild(sunset);


  } catch (error) {
    console.log(`Error occured!`, error);
  }
}
fetchDataTodaysForecast();


const fetchDataNextFiveDaysForecast = async () => {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=798eeac13b738f9ebfbf936c1e8564a9");
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    const eachDay = Array.from(data.list);

    const daysList = document.createElement("ul");
    daysList.id = "futureDayList";

    eachDay.forEach((day) =>{
      const time = day.dt_txt;

      if (time.includes("12:00:00")) {
        dateOfTime = new Date(time);
        day = dateOfTime.getDay();
      
        const futureDay = document.createElement("li");
        futureDay.classList.add("listOfDays")
        futureDay.textContent = `${dayNames[day]}`;

        daysList.appendChild(futureDay);
      }
    });
    futureDaysContainer.appendChild(daysList);
  } catch (error) {
    console.log(`Error occured!`, error);
  }
}
fetchDataNextFiveDaysForecast()


/* This function takes the the following parameters:
  - Weather description
  - Current Hour
  - Sunrise Hour
  - Sunset Hour
  Then it returns img-link to the correct icon to display from an array
  returns: String 
*/
const getWeatherIcon = (weather, time, sunriseHour, sunsetHour) => {
  switch (weather) {
    case "Clear":
      if (time >= sunriseHour && time <= sunsetHour) {
        return weatherIcons[0];
      } else {
        return weatherIcons[1];
      }
  
    case "Clouds":
      if (time >= sunriseHour && time <= sunsetHour) {
        return weatherIcons[2];
      } else {
        return weatherIcons[3];
      }

    case "Scattered clouds":
      weatherIcons[4];
      break;

    case "Broken clouds":
      return weatherIcons[5];

    case "Shower rain":
      return weatherIcons[6];

    case "Drizzle":
      return weatherIcons[6];

    case "Rain":
      if (time >= sunriseHour && time <= sunsetHour) {
        return weatherIcons[7];
      } else {
        return weatherIcons[8];
      }

    case "Thunderstorm":
      return weatherIcons[9];

    case "Snow":
       return weatherIcons[10];
    
    case "Mist":
      return weatherIcons[11];
  
    case "Smoke":
      return weatherIcons[11];
  
    case "Haze":
      return weatherIcons[11];
  
    case "Dust":
      return weatherIcons[11];
  
    case "Sand":
      return weatherIcons[11];
  
    case "Dust":
      return weatherIcons[11];
  
    case "Ash":
      return weatherIcons[11];
  
    case "Squall":
      return weatherIcons[11];
  
    case "Tornado":
      return weatherIcons[11];
  
    default:
      console.log("The weather case does not match the description")
      break;
  }
}