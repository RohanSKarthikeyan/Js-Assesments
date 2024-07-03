const apiKey = '156fec1e6362b0c62e7e0c2d9206adcd';

let cities = JSON.parse(localStorage.getItem('cities')) || [];

const mainDiv = document.createElement('div');
mainDiv.id = 'mainDiv';
document.body.appendChild(mainDiv);

const formDiv = document.createElement('div');
formDiv.id = 'formDiv';

const headerText = document.createElement('h1');
headerText.textContent = "Enter Your City!...";
headerText.id = 'headerT';
formDiv.appendChild(headerText);

const cityIn = document.createElement('input');
cityIn.setAttribute('list', 'cityList');
const searchBtn = document.createElement('button');
searchBtn.textContent = "Search";

const weatherDiv = document.createElement('div');
weatherDiv.id = 'weatherDiv';
mainDiv.appendChild(weatherDiv);

const cityList = document.createElement('datalist');
cityList.id = 'cityList';
updateCityList();

function renderForm() {
    mainDiv.appendChild(formDiv);
    formDiv.appendChild(cityIn);
    formDiv.appendChild(searchBtn);
    mainDiv.appendChild(cityList);
}

function renderWeather(data) {
    weatherDiv.innerHTML = ''; 

    const cityName = document.createElement('h2');
    cityName.textContent = data.name;
    weatherDiv.appendChild(cityName);

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`; 
    weatherDiv.appendChild(temperature);

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherDiv.appendChild(humidity);

    const weather = document.createElement('p');
    weather.textContent = `Weather: ${data.weather[0].description}`;
    weatherDiv.appendChild(weather);

    if (!cities.includes(data.name)) {
        cities.push(data.name);
        localStorage.setItem('cities', JSON.stringify(cities));
        updateCityList();
    }

    console.log(cities); 
}

function fetchData() {
    const city = cityIn.value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        renderWeather(data); 
    }).catch(error => {
        console.error('There was an error with the fetch operation:', error);
    });
}

searchBtn.addEventListener('click', fetchData);

function updateCityList() {
    cityList.innerHTML = ''; 
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        cityList.appendChild(option);
    });
}

renderForm();
