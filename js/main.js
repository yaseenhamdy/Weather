let nToggler = document.getElementById("nToggler");
let wStatus = document.getElementById("wStatus");
let flag = 0;
nToggler.addEventListener("click", function () {
    if (!flag) {
        flag = 1;
        wStatus.style.top = "500px";
        wStatus.style.transitionDuration = "0.5s";
    }
    else {
        flag = 0;
        wStatus.style.top = "240px";
        wStatus.style.transitionDuration = "0.5s";
    }
})
let weatherDay1 = [];
let weatherDay2 = [];
let weatherDay3 = [];
let search = document.getElementById("search");
async function getWeather(country) {
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=cb0431d3996a4d81a5e140948230708&q=${country}&days=3`)
        let day = await data.json();
        weatherDay1 = [];
        weatherDay1.push(day);
        weatherDay2 = [];
        weatherDay2.push(day.forecast.forecastday[1].day);
        weatherDay3 = [];
        weatherDay3.push(day.forecast.forecastday[2].day);
        displayDays();
}

getWeather("cai");
search.addEventListener("keyup", a => {
    getWeather(a.target.value);
})

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let DAte = new Date();
let dayDay1 = document.getElementById("dayDay1");
let monthDay1 = document.getElementById("monthDay1");
let dayDay2 = document.getElementById("dayDay2");
let dayDay3 = document.getElementById("dayDay3");
let city = document.getElementById("city");
let tempDay1 = document.getElementById("tempDay1");
let imgDay1 = document.getElementById("imgDay1");
let stateDay1 = document.getElementById("stateDay1");
let raining = document.getElementById("raining");
let wind = document.getElementById("wind");
let diraction = document.getElementById("diraction");
let mxTempDay2 = document.getElementById("mxTempDay2");
let mnTempDay2 = document.getElementById("mnTempDay2");
let stateDay2 = document.getElementById("stateDay2");
let imgDay2 = document.getElementById("imgDay2");
let mxTempDay3 = document.getElementById("mxTempDay3");
let mnTempDay3 = document.getElementById("mnTempDay3");
let stateDay3 = document.getElementById("stateDay3");
let imgDay3 = document.getElementById("imgDay3");

function displayDays() {
    dayDay1.innerHTML = days[DAte.getDay()];
    dayDay2.innerHTML = days[(DAte.getDay() + 1) % days.length];
    dayDay3.innerHTML = days[(DAte.getDay() + 2) % days.length];
    monthDay1.innerHTML = DAte.getDate() + `${months[DAte.getMonth()]}`
    city.innerHTML = `${weatherDay1[0].location.name}`;
    tempDay1.innerHTML = `${weatherDay1[0].current.temp_c}<sup class="">o</sup>C `;
    imgDay1.src = `${weatherDay1[0].current.condition.icon}`;
    stateDay1.innerHTML = `${weatherDay1[0].current.condition.text}`
    raining.innerHTML = `<img src="https://routeweather.netlify.app/images/icon-umberella@2x.png" width="21" height="21"">${weatherDay1[0].current.humidity}%`
    wind.innerHTML = `<img src="https://routeweather.netlify.app/images/icon-wind@2x.png" width="23" height="21">${weatherDay1[0].current.wind_kph}km/h`
    diraction.innerHTML = `<img src="https://routeweather.netlify.app/images/icon-compass@2x.png" width="21" height="21">${weatherDay1[0].current.wind_dir}`
    imgDay2.src = `${weatherDay2[0].condition.icon}`
    mxTempDay2.innerHTML = `${weatherDay2[0].maxtemp_c}<sup>o</sup>C`;
    mnTempDay2.innerHTML = `${weatherDay2[0].mintemp_c}<sup>o</sup>C`;
    stateDay2.innerHTML = `${weatherDay2[0].condition.text}`
    imgDay3.src = `${weatherDay3[0].condition.icon}`
    mxTempDay3.innerHTML = `${weatherDay3[0].maxtemp_c}<sup>o</sup>C`;
    mnTempDay3.innerHTML = `${weatherDay3[0].mintemp_c}<sup>o</sup>C`;
    stateDay3.innerHTML = `${weatherDay3[0].condition.text}`
}
