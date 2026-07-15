// let apiKeys = "55a0d1e325b051095db6d17866c8275c";
// let apiURL = "https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}";
// let longLatAPI = "http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=5&appid={API key}";

// // type in the city name
// // clicking the button
// // getting the response 

// //    - Get longititude and latitude
// //    - Get weather conditions with longitude and latitude

// const button = document.querySelector(".search-box button");

// button.addEventListener("click", handleSubmit);

// function handleSubmit() {
// const searchInput = document.querySelector(".search-box input");
// let city = searchInput.value; 
// console.log("click");
// if (!city || city === "") {
//     document.querySelector(".errpr").classList.remove("hidden")
//     return;
// }
// let trimmedCity = cityInput.trim();
// getLongLatt(trimmedCity);
// }

// async function getLongLatt(city) {
//     try {
//         const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//         const response = await fetch(
//           `http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&limit=5&appid=${apiKey}`,
//         );
  
//         console.log("Response object from City", response);

//         //to get the data await for the response to reac
//         const data = await response.json();
//         console.log(data);
//         const firstData = data[0];

//         //passing first data in the response array so we can use the first one
//         getWeather(firstData);
//         console.log("first data", firstData);
//       } catch (error) {
//         console.error("Catch block for orderPizza2", error);
//       } finally {
//         console.log("Service called"); // Either success or failure response has been retrived
//       }
// }

// async function getWeather(data) {
//       let datas = data;
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/4.0/onecall/current?lat=${datas.lat}&lon=${datas.lon}&appid=${apiKeys}`,
//         );
//         console.log("Response object from orderPizza2", response);

//         // to get the data await for the response to reac
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error("Catch block for orderPizza2", error);
//       } finally {
//         console.log("Service called"); // Either success or failure response has been retrived
//       }
// }




 // const response = await fetch(
        //   https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&limit=5&appid=${apiKey},
        // );
        // const response = await fetch(
        //     `https://api.openweathermap.org/data/4.0/weather?&units=metric&q=${cityInput}&limit=5&appid=${apiKeys}`,
        // );