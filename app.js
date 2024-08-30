const apikey = "f10e4aa8c216f4fb35d567d66fb9f83f";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".temp")

async function checkWeather (city) {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    
    var data = await response.json();

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "cloudy.png"
    }
    else if(data.weather[0].main == "Storm"){
        weatherIcon.src = "storm.png"
    }
    else if(data.weather[0].main == "No rain"){
        weatherIcon.src = "norain.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();