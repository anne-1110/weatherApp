const apiKey = "55a0d1e325b051095db6d17866c8275c";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";//  to get the city API

let longLatAPI = "http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid={API key}"; // get longitude and lattitude


// Selecting HTML elements using their IDs
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const weatherCard = document.getElementById("weatherCard");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("icon");
const message = document.getElementById("message");

// Adding a click event to the search button.
// Whenever the user clicks the button,
// the handleSubmit() function runs.
searchBtn.addEventListener("click", handleSubmit);

// BONUS: Allows pressing "Enter" on the keyboard to search
cityInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        handleSubmit();
    }
});


// HANDLE BUTTON CLICK
function handleSubmit() {
    const searchedCity = cityInput.value.trim();

    // Checks if the input field is empty.
    if (searchedCity === "") {
        message.textContent = "Please enter a city name.";
        message.style.color = "orange";
        weatherCard.style.display = "none";
        return;
    }
    message.textContent = "";

    // Calls the function that gets weather data.
    getWeather(searchedCity);
}

// GET WEATHER DATA
async function getWeather(cityName) {
    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
        message.textContent = "Loading...";
        message.style.color = "white";

        // Sends a request to the API.
        const response = await fetch(url);

        // Checks if the city exists.
        if (!response.ok) {
            throw new Error("City not found");
        }

        // Converts the response into a JavaScript object.
        const data = await response.json();
        message.textContent ="";

        // Makes the weather card visible.
        weatherCard.style.display = "block";

        // Displays the city name.
        city.textContent = data.name;

        // Displays the temperature.
        temp.textContent = Math.round(data.main.temp) + "°C";

        // Displays the weather condition.
        condition.textContent = data.weather[0].main;

        // Displays the humidity.
        humidity.textContent = data.main.humidity + "%";

        // Displays the wind speed.
        windSpeed.textContent = data.wind.speed + " km/h";

        // Displays the weather icon.
        weatherIcon.src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        // Save to Local Storage upon a successful API response
        localStorage.setItem("lastSearchedCity", data.name);
    }

    catch (error) {

        // Hides the weather card if an error occurs.
        weatherCard.style.display = "none";

        // Displays an error message.
        message.textContent = "City not found.";

        // Displays the error in the console.
        console.error(error);

    }
}

// Local Storage Strategy: Load previous session data on start
    window.addEventListener("DOMContentLoaded", () => {
        const savedCity = localStorage.getItem("lastSearchedCity");
        if (savedCity) {
            checkWeather(savedCity);
        } else {
            // Optional: Fallback default city if no local storage exists yet
            checkWeather("New York"); 
        }
    });
    

















 

































// // Global API Configurations
// const apiKey = "55a0d1e325b051095db6d17866c8275c";

// // DOM Elements 
// const button = document.querySelector(".search-box button");
// const searchInput = document.querySelector(".search-box input");
// const messageEl = document.getElementById("message");

// // UI Elements to update
// const cityEl = document.getElementById("city");
// const tempEl = document.getElementById("temp");
// const conditionEl = document.getElementById("condition");
// const iconEl = document.getElementById("icon");
// const humidityEl = document.getElementById("humidity");
// const windSpeedEl = document.getElementById("windSpeed");
// const weatherCard = document.getElementById("WeatherCard");

// // Event Listener
// button.addEventListener("click", handleSubmit);

// // Allow user to press Enter key as well
// searchInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") handleSubmit();
// });

// function handleSubmit() {
//     const city = searchInput.value; 
//     console.log("Search initiated");

//     if (!city || city.trim() === "") {
//         messageEl.textContent = "Please enter a city name.";
//         messageEl.style.color = "orange";
//         return;
//     }

//     let trimmedCity = city.trim();
//     getLongLatt(trimmedCity);
// }

// async function getLongLatt(city) {
//     try {
//         messageEl.textContent = "Locating city...";
//         messageEl.style.color = "white";

//         const geoUrl = `https://openweathermap.org{encodeURIComponent(city)}&limit=1&appid=${apiKey}`,
//         const response = await fetch(geoUrl);
        
//         if (!response.ok) throw new Error("Location service unavailable.");

//         const data = await response.json();
        
//         if (data.length === 0) {
//             throw new Error("City not found. Try another.");
//         }

//         const firstData = data[0];
//         console.log("Location found:", firstData);

//         // Step 2: Pass data containing .lat and .lon to getWeather
//         getWeather(firstData);

//     } catch (error) {
//         console.error("Error in getLongLatt:", error);
//         messageEl.textContent = error.message;
//         messageEl.style.color = "red";
//     }
// }

// // Step 2: Get weather using latitude and longitude
// async function getWeather(locationData) {
//     try {
//         messageEl.textContent = "Fetching weather...";
        
//         // Using the standard 2.5 API data feed which contains all your required layout info
//         const weatherUrl = https://openweathermap.org{locationData.lat}&lon=${locationData.lon}&units=metric&appid=${apiKey};
        
//         const response = await fetch(weatherUrl);
//         if (!response.ok) throw new Error("Weather data fetch failed.");

//         const weatherData = await response.json();
//         console.log("Weather Data:", weatherData);

//         // Step 3: Update your HTML structure with the data
//         updateUI(weatherData, locationData);

//     } catch (error) {
//         console.error("Error in getWeather:", error);
//         messageEl.textContent = error.message;
//         messageEl.style.color = "red";
//     }
// }

// // Step 3: Map data to HTML
// function updateUI(weatherData, locationData) {
//     // Clear status message
//     messageEl.textContent = "";

//     // Set texts (uses state/country from Geocoding data if available)
//     const cityName = locationData.local_names?.en || locationData.name;
//     cityEl.textContent = ${cityName}, ${locationData.country};
//     tempEl.textContent = ${Math.round(weatherData.main.temp)}°C;
//     conditionEl.textContent = weatherData.weather[0].description;
//     humidityEl.textContent = ${weatherData.main.humidity}%;
//     windSpeedEl.textContent = ${Math.round(weatherData.wind.speed * 3.6)} km/h;

//     // Set weather status icon
//     const iconCode = weatherData.weather[0].icon;
//     iconEl.src = https://openweathermap.org{iconCode}@2x.png;
//     iconEl.alt = weatherData.weather[0].description;

//     // Show container card dynamically 
//     weatherCard.style.display = "block";
// }






























// const apiKey = "55a0d1e325b051095db6d17866c8275c";
// let apiURL = "https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}"; //  to get the city API
// let longLatAPI = "http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid={API key}"; // get longitude and lattitude


// Selecting HTML elements using their IDs.
// const searchBtn = document.getElementById("searchBtn");
// const cityInput = document.getElementById("cityInput");


// const weatherCard = document.getElementById("weatherCard");
// const temp = document.getElementById("temp");
// const city = document.getElementById("city");
// const condition = document.getElementById("condition");
// const humidity = document.getElementById("humidity");
// const windSpeed = document.getElementById("windSpeed");
// const message = document.getElementById("message");

// // Adds a click event to the search button.
// searchBtn.addEventListener("click", getWeather);

// // Async function because fetching data from an API takes time.
// async function getWeather() {

//     // Gets the value the user typed into the input field.
//     // trim() removes any spaces before or after the text.
//     // toLowerCase() converts the text to lowercase so the comparison
//     // works whether the user types Lagos, LAGOS, or lagos.
//     const city = cityInput.value.trim().toLowerCase();

//     // Checks if the user entered "lagos".
//     if (city === "lagos") {
//         city.textContent = "Lagos";
//         temp.textContent = "30°C";
//         condition.textContent = "Sunny";
//         humidity.textContent = "75%";
//         windSpeed.textContent = "10 km/h";
//     }

//     else if (city === "abuja") {
//         city.textContent = "Abuja";
//         temp.textContent = "27°C";
//         condition.textContent = "Cloudy";
//         humidity.textContent = "60%";
//         windSpeed.textContent = "8 km/h";
//     }

//     else if (city === "ibadan") {
//         city.textContent = "Ibadan";
//         temp.textContent = "28°C";
//         condition.textContent = "Rainy";
//         humidity.textContent = "80%";
//         windSpeed.textContent = "12 km/h";
//     }

//     else {
//         message.textContent = "City not found.";
//     }
//     // Gets the text the user typed into the input box.
//     // //  removes spaces before and after the text.
//     // trim()
//     // const city = cityInput.value.trim();

//     // Checks if the input box is empty.
//     // if(city === ""){
//     //     message.textContent = "Please enter a city name.";
//     //     return;
//     // }

//     //  // Clears any previous error message.
//     // message.textContent = "";

//     // //  Creates the API URL.
//     // // The city entered by the user is inserted into the URL.
//     // const url =
//     // let apiURL = "https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}"; //  to get the city API


//     // try{

//     //     const response = await fetch(apiURL);

//     //     if(!response.ok){
//     //         throw new Error("City not found");
//     //     }

//     //     const data = await response.json();

//     //     city.textContent = data.name;
//     //     temp.textContent = Math.round(data.main.temp) + "°C";
//     //     condition.textContent = data.weather[0].main;
//     //     humidity.textContent = data.main.humidity + "%";
//     //     windSpeed.textContent = data.wind.speed + " km/h";

//     //     // weatherIcon.src =
//     //     // https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png;

//     // }

//     // catch(error){
//     //     message.textContent = "City not found.";
//     // }
// }