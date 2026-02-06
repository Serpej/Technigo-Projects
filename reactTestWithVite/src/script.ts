// Interface
interface TodaysWeatherApiResponse {
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
  }>;
  sys: {
    sunrise: number;
    sunset: number;
  }
  name: string;
  dt:number;
};

interface FutureDayWeatherApiResponse {
  list: Array <{
    weather: Array <{
      main: string;
    }>;
    main: {
      temp_max: number;
      temp_min: number;
    };
    dt_txt: string;
  }>;
};


// DOM Elements
const todaysContainer = document.getElementById("today-container") as HTMLDivElement;
const todaysTemperatureContainer = document.getElementById("temp-container") as HTMLDivElement;
const cityContainer = document.getElementById("city-container") as HTMLDivElement;
const weatherDescriptionContainer = document.getElementById("description-container") as HTMLDivElement;
const sunriseSunsetContainer = document.getElementById("sunrise-sunset-container") as HTMLDivElement;
const futureDaysContainer = document.getElementById("future-forecast-container") as HTMLDivElement;
const todaysIconContainer = document.getElementById("todays-weather-icon-container") as HTMLDivElement;

// Arrays
const stars: string[]= ["./assets/figmaAssets/stars/Group 3.svg", "./assets/figmaAssets/stars/Group 4.svg", "./assets/figmaAssets/stars/Group 5.svg", "./assets/figmaAssets/stars/Group 6.svg", "./assets/figmaAssets/stars/Group 8.svg", "./assets/figmaAssets/stars/Group 9.svg", "./assets/figmaAssets/stars/Group 10.svg", "./assets/figmaAssets/stars/Group 11.svg", "./assets/figmaAssets/stars/Group 3.svg", "./assets/figmaAssets/stars/Group 4.svg", "./assets/figmaAssets/stars/Group 5.svg", "./assets/figmaAssets/stars/Group 6.svg", "./assets/figmaAssets/stars/Group 8.svg", "./assets/figmaAssets/stars/Group 9.svg", "./assets/figmaAssets/stars/Group 10.svg", "./assets/figmaAssets/stars/Group 11.svg"];
const dayNames: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weatherIcons: string[] = ["http://openweathermap.org/img/wn/01d@2x.png", "http://openweathermap.org/img/wn/01n@2x.png", "http://openweathermap.org/img/wn/02d@2x.png", "http://openweathermap.org/img/wn/02n@2x.png","http://openweathermap.org/img/wn/03d@2x.png", "http://openweathermap.org/img/wn/04n@2x.png", "http://openweathermap.org/img/wn/09n@2x.png", "http://openweathermap.org/img/wn/10d@2x.png", "http://openweathermap.org/img/wn/10n@2x.png", "http://openweathermap.org/img/wn/11n@2x.png", "http://openweathermap.org/img/wn/13n@2x.png", "http://openweathermap.org/img/wn/50n@2x.png"];

const fetchDataTodaysForecast =  async (): Promise<void> => {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=798eeac13b738f9ebfbf936c1e8564a9");
    
    if(!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    };
    const data: TodaysWeatherApiResponse = await response.json();

    // Get todays temp rounded
    const todaysTemperature: HTMLSpanElement = document.createElement("span");
    todaysTemperature.id = "temperature";
    const todaysTemperatureRounded: number = roundToInteger(data.main.temp);
    const tempUnit: HTMLSpanElement = document.createElement("span");
    tempUnit.id = "temp-unit";

    todaysTemperature.textContent = `${todaysTemperatureRounded}`
    tempUnit.textContent = "°C"

    // Get city
    const city: HTMLSpanElement = document.createElement("span");
    city.id = "city";
    city.textContent = `${data.name}`;

    // Get Weather description
    const weatherDescription: HTMLSpanElement = document.createElement("span");
    weatherDescription.id = "description";
    
    // Safeguard
    if (!data.weather[0]) return;

    const currentWeather: string  = data.weather[0].main;
    weatherDescription.textContent = `${currentWeather}`;

    // Get sunrise and sunset
    const sunrise: HTMLSpanElement = document.createElement("span");
    const sunset: HTMLSpanElement = document.createElement("span");
    const sunfiller: HTMLSpanElement = document.createElement("span");
    sunrise.id = "sunrise";
    sunfiller.id = "sun-Filler"
    sunset.id = "sunset";
    
    // Convert to seconds and format to "00:00"
    const sunriseTime: Date = new Date(data.sys.sunrise * 1000);
    const sunsetTime: Date = new Date(data.sys.sunset * 1000);
    const sunriseTimeTwoDigits: string = sunriseTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
    const sunsetTimeTwoDigits: string = sunsetTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });

    sunrise.textContent = `Sunrise: ${sunriseTimeTwoDigits}`;
    sunset.textContent = `Sunset: ${sunsetTimeTwoDigits}`;

    // Get weather icon
    const todaysIconImage: HTMLImageElement = document.createElement("img");
    const currentHour: number = new Date(data.dt * 1000).getHours();
    const sunriseHour = sunriseTime.getHours();
    const sunsetHour = sunsetTime.getHours();
    const dayOrNight: boolean = isDay(currentHour, sunriseHour, sunsetHour)
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

// Get data  for the future days
const fetchDataNextFiveDaysForecast = async (): Promise<void> => {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=798eeac13b738f9ebfbf936c1e8564a9");
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data: FutureDayWeatherApiResponse = await response.json();
    const eachDay: FutureDayWeatherApiResponse['list'] = Array.from(data.list);

    const daysList: HTMLUListElement = document.createElement("ul");
    daysList.id = "futureDayList";

    eachDay.forEach((day) =>{
      const time: string = day.dt_txt;

      // Get the day and append the right name in the list
      if (time.includes("12:00:00")) {
        const dateOfTime: Date = new Date(time);
        const weekDay: number = dateOfTime.getDay();
        const futureDayListItem: HTMLLIElement = document.createElement("li");
        futureDayListItem.classList.add("listOfDays")

        // Add right day to list
        futureDayListItem.textContent = `${dayNames[weekDay]}`;

        // Add right icon to list
        const imgAndTempContainer: HTMLDivElement = document.createElement("div");
        imgAndTempContainer.id = "img-and-temp-container";
        const futureFiller: HTMLSpanElement = document.createElement("span");
        futureFiller.id = "future-filler";
        const futureDayImg: HTMLImageElement = document.createElement("img");
        
        // Safe guard
        if (!day.weather[0]) return;
        
        const futureWeather: string = day.weather[0].main;
        const alwaysDay: boolean = true;
        const futureDaysIcon: string = getWeatherIcon(futureWeather, alwaysDay); 
        futureDayImg.src = `${futureDaysIcon}`;
        futureDayImg.id = "future-day-img";

        // Add highest and lowest temp
        const futureTempContainer: HTMLSpanElement = document.createElement("span");
        futureTempContainer.id = "future-temp-container";
        const highesTemp: number = Math.round(day.main.temp_max);
        const lowestTemp: number = Math.round(day.main.temp_min);
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
const roundToInteger = (number: number): number => {
  return Math.round(number);
};

/* 
  This function randomizes a number and returns it as a string with a % sign.
 */
const randomizePosition = (): string => {
const randomPosition = Math.floor((Math.random() * 70) + 5 );
return `${randomPosition}`;
};


/* 
  This function adds stars to the background of todays container at a randomized position.
 */
const addStars = ():void => {
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
const isDay = (time: number, sunriseHour: number, sunsetHour: number): boolean => {
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
const getWeatherIcon = (weather: string, isDay: boolean): string => {
  switch (weather) {
    case "Clear":
      if (isDay ) {
        return safeGuarded(weatherIcons[0]);
      } else {
        return safeGuarded(weatherIcons[1]);
      };
  
    case "Clouds":
      if (isDay) {
        return safeGuarded(weatherIcons[2]);
      } else {
        return safeGuarded(weatherIcons[3]);
      };

    case "Scattered clouds":
      return safeGuarded(weatherIcons[4]);

    case "Broken clouds":
      return safeGuarded(weatherIcons[5]);

    case "Shower rain":
      return safeGuarded(weatherIcons[6]);

    case "Drizzle":
      return safeGuarded(weatherIcons[6]);

    case "Rain":
      if (isDay) {
        return safeGuarded(weatherIcons[7]);
      } else {
        return safeGuarded(weatherIcons[8]);
      };

    case "Thunderstorm":
      return safeGuarded(weatherIcons[9]);

    case "Snow":
       return safeGuarded(weatherIcons[10]);
    
    case "Mist":
      return safeGuarded(weatherIcons[11]);
  
    case "Smoke":
      return safeGuarded(weatherIcons[11]);
  
    case "Haze":
      return safeGuarded(weatherIcons[11]);
  
    case "Dust":
      return safeGuarded(weatherIcons[11]);
  
    case "Sand":
      return safeGuarded(weatherIcons[11]);
  
    case "Dust":
      return safeGuarded(weatherIcons[11]);
  
    case "Ash":
      return safeGuarded(weatherIcons[11]);
  
    case "Squall":
      return safeGuarded(weatherIcons[11]);
  
    case "Tornado":
      return safeGuarded(weatherIcons[11]);
  
    default:
      console.log("The weather case does not match the description")
      return "undefined";
  };
};

function safeGuarded(string: string | undefined): string {
  if (!string) {
    return "Undefined";
  }
  return string?.toString();
};