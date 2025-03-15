const apikey = "760a1842b7da4612c57630d5f38e59fd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(para) {
    let response = await fetch(apiUrl + para + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    let cityName = document.querySelector(".city");
    cityName.innerHTML = data.name;
    let temp = document.querySelector(".temperature");
    temp.innerHTML = data.main.temp + `°C`;
    let windspeed = document.querySelector(".value2");3
    windspeed.innerHTML = data.wind.speed + `km/hr`;
    let humidity = document.querySelector(".value1");
    humidity.innerHTML = data.main.humidity + `%`;
    

    // if we have to change the image according to the temperatue 
    
    let condition = data.weather[0].main;
    console.log(condition);
    let img = document.querySelector('#condition_img');
    
   
    if(condition=='smoke'){
        img.src="new-image";
    }
    else if(condition=="Clear"){
        img.src='delete.png';
    }
    else if(condition=="rain"){
        img.src="new-image2";
    }
    
}

let srch = document.querySelector(".search-box button");
let city = document.querySelector('.city_name');

srch.addEventListener('click', () => {
    checkWeather(city.value);

})

