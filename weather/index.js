const weatherInfoElement = document.getElementById('weather-info');
const dayOfTheWeek = document.getElementById('day');
const timeOfDay = document.getElementById('time');
const tempElement = document.getElementById('temp')
const rainElement = document.getElementById('rain')
const windElement = document.getElementById('wind')
const sunriseElement = document.getElementById('sunrise')
const containerElement = document.getElementById('container')
const btn = document.getElementById('btn');



var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
dayOfTheWeek.textContent = (daylist[day])

var hour = today.getHours();

var minute = today.getMinutes();
var second = today.getSeconds();
timeOfDay.textContent =(hour + ":" + minute );

// Define the API URL
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&hourly=precipitation_probability&daily=sunrise&current_weather=true&windspeed_unit=mph&timezone=GMT&forecast_days=7";

var days = 0;
// Add the event listener for the button
btn.addEventListener('click', () => {
    if(days === 0){
        days = 1;
        fetch(apiUrl)
    }else{
        days = 0;
        fetch(apiUrl)
    }
    console.log(days)
})

// Fetch data from the API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(data => {
        // Extract the relevant information from the JSON response
        console.log("data", data)
        console.log(data.hourly.precipitation_probability[hour])
        tempElement.textContent = data.current_weather.temperature;
        windElement.textContent = data.current_weather.windspeed + " mph";
        rainElement.textContent = data.hourly.precipitation_probability[hour] + "%"
        sunriseElement.textContent = data.daily.sunrise[0].slice(12) + "am"
        //Sun Moon image
        var img = document.createElement("img");
        // if (days === 1) {
        if (data.current_weather.is_day === 0) {
            img.src = "https://raw.githubusercontent.com/leetebbs/storage/main/sun.png";
            var src = document.getElementById("weather_image");
            src.appendChild(img);
        } else {
            img.src = "https://raw.githubusercontent.com/leetebbs/storage/main/moon.png";
            var src = document.getElementById("weather_image");
            src.appendChild(img);
        }

//container image 
        var img = document.createElement("img");
        // if (days === 1) {
        if (data.current_weather.is_day === 0) {
            img.src = "https://img.freepik.com/premium-photo/field_87394-32838.jpg";
        } else {
            img.src = "https://images.unsplash.com/uploads/14116941824817ba1f28e/78c8dff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHN0YXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";
        }

        var src = document.getElementById("container");
        src.style.backgroundImage = "url('" + img.src + "')";

        const weatherInfo = `
  
        `;
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
        weatherInfoElement.textContent = 'Failed to fetch weather data.';
    });