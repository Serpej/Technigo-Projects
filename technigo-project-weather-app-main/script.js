const todaysContainer = document.getElementById("today-container");
const backgroundOfTodaysWeather = document.getElementById("today-container::before");
const todaysTemperatureContainer = document.getElementById("temp-container");
const cityContainer = document.getElementById("city-container");
const weatherDescriptionContainer = document.getElementById("description-container");
const sunriseSunsetContainer = document.getElementById("sunrise-sunset-container");
const futureDaysContainer = document.getElementById("future-forecast-container");
const todaysIconContainer = document.getElementById("todays-weather-icon-container");
const stars = ["./assets/figmaAssets/stars/Group 3.svg", "./assets/figmaAssets/stars/Group 4.svg", "./assets/figmaAssets/stars/Group 5.svg", "./assets/figmaAssets/stars/Group 6.svg", "./assets/figmaAssets/stars/Group 8.svg", "./assets/figmaAssets/stars/Group 9.svg", "./assets/figmaAssets/stars/Group 10.svg", "./assets/figmaAssets/stars/Group 11.svg", "./assets/figmaAssets/stars/Group 3.svg", "./assets/figmaAssets/stars/Group 4.svg", "./assets/figmaAssets/stars/Group 5.svg", "./assets/figmaAssets/stars/Group 6.svg", "./assets/figmaAssets/stars/Group 8.svg", "./assets/figmaAssets/stars/Group 9.svg", "./assets/figmaAssets/stars/Group 10.svg", "./assets/figmaAssets/stars/Group 11.svg"];
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weatherIcons = ["http://openweathermap.org/img/wn/01d@2x.png", "http://openweathermap.org/img/wn/01n@2x.png", "http://openweathermap.org/img/wn/02d@2x.png", "http://openweathermap.org/img/wn/02n@2x.png","http://openweathermap.org/img/wn/03d@2x.png", "http://openweathermap.org/img/wn/04n@2x.png", "http://openweathermap.org/img/wn/09n@2x.png", "http://openweathermap.org/img/wn/10d@2x.png", "http://openweathermap.org/img/wn/10n@2x.png", "http://openweathermap.org/img/wn/11n@2x.png", "http://openweathermap.org/img/wn/13n@2x.png", "http://openweathermap.org/img/wn/50n@2x.png"];

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
    const sunfiller = document.createElement("span");
    sunrise.id = "sunrise";
    sunfiller.id = "sun-Filler"
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
    const currentHour = new Date(data.dt * 1000).getHours();
    const sunriseHour = sunriseTime.getHours();
    const sunsetHour = sunsetTime.getHours();
    const dayOrNight = isDay(currentHour, sunriseHour, sunsetHour)
    const currentIcon = getWeatherIcon(currentWeather, dayOrNight);
    todaysIconImage.id = "todays-Weather-Icon"
    todaysIconImage.src = currentIcon;
    todaysIconImage.alt = "Icon for the current weather"

    // Get background color
    if (isDay(currentHour, sunriseHour, sunsetHour)) {
      todaysContainer.classList.add("day");
      todaysContainer.classList.remove("night");
    } else {
      todaysContainer.classList.add("night");
      addStars();
      todaysContainer.classList.remove("day");
    };

    // Append Children
    todaysTemperatureContainer.appendChild(todaysTemperature);
    todaysTemperatureContainer.appendChild(tempUnit);
    todaysIconContainer.appendChild(todaysIconImage);
    cityContainer.appendChild(city);
    weatherDescriptionContainer.appendChild(weatherDescription);
    sunriseSunsetContainer.appendChild(sunrise);
    sunriseSunsetContainer.appendChild(sunfiller);
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

      // Get the day and append the right name in the list
      if (time.includes("12:00:00")) {
        dateOfTime = new Date(time);
        weekDay = dateOfTime.getDay();
        const futureDayListItem = document.createElement("li");
        futureDayListItem.classList.add("listOfDays")

        // Add right day to list
        futureDayListItem.textContent = `${dayNames[weekDay]}`;

        // Add right icon to list
        const imgAndTempContainer = document.createElement("div");
        imgAndTempContainer.id = "img-and-temp-container";
        const futureFiller = document.createElement("span");
        futureFiller.id = "future-filler";
        const futureDayImg = document.createElement("img");
        const futureWeather = day.weather[0].main;
        const alwaysDay = true;
        const futureDaysIcon = getWeatherIcon(futureWeather, alwaysDay); 
        futureDayImg.src = `${futureDaysIcon}`;
        futureDayImg.id = "future-day-img";

        // Add highest and lowest temp
        const futureTempContainer = document.createElement("span");
        futureTempContainer.id = "future-temp-container";
        const highesTemp = Math.round(day.main.temp_max);
        const lowestTemp = Math.round(day.main.temp_min);
        futureTempContainer.textContent = `${highesTemp}/${lowestTemp}°C`

        daysList.appendChild(futureDayListItem);
        futureDayListItem.appendChild(futureFiller);
        futureDayListItem.appendChild(imgAndTempContainer);
        imgAndTempContainer.appendChild(futureDayImg);
        imgAndTempContainer.appendChild(futureTempContainer)
      }
    });

    futureDaysContainer.appendChild(daysList);
  } catch (error) {
    console.log(`Error occured!`, error);
  }
}

fetchDataNextFiveDaysForecast();

/* 
  This function takes a number and rounds it to it's nearest integer.
  Returns an integer.
 */
roundToInteger = (number) => {
  return Math.round(number);
};

/* 
  This function randomizes a number and returns it as a string with a % sign.
 */
const randomizePosition = () => {
const randomPosition = Math.floor((Math.random() * 70) + 5 );
return `${randomPosition}`;
};


/* 
  This function adds stars to the background of todays container at a randomized position.
 */
const addStars = () => {
  stars.forEach ((starSrc) =>{
    const star = document.createElement("img");
    star.src = starSrc;
    star.classList.add("stars");
    star.style.top = `${randomizePosition()}%`;
    star.style.left = `calc(30% + ${randomizePosition()}%)`;
    todaysContainer.appendChild(star);
  });
  
};

/* 
  This function returns true if it's day and false if it's night
  - Current Hour
  - Sunrise Hour
  - Sunset Hour
  returns: boolean
 */
const isDay = (time, sunriseHour, sunsetHour) => {
  if (time > sunriseHour && time < sunsetHour) {
    return true;
  } else {
    return false;
  };
}

/* 
  This function takes the the following parameters:
  - Weather description
  - isDay boolean
  Then it returns img-link to the correct icon to display from an array
  returns: String 
*/
const getWeatherIcon = (weather, isDay) => {
  switch (weather) {
    case "Clear":
      if (isDay ) {
        return weatherIcons[0];
      } else {
        return weatherIcons[1];
      };
  
    case "Clouds":
      if (isDay) {
        return weatherIcons[2];
      } else {
        return weatherIcons[3];
      };

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
      if (isDay) {
        return weatherIcons[7];
      } else {
        return weatherIcons[8];
      };

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
  };
};