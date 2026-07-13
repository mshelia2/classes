const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const apiKey = "YOUR_API_KEY";

searchBtn.addEventListener("click", () => {

    const city = cityInput.value;

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)

    .then(response => response.json())

    .then(data => {

        if(data.cod == "404"){
            alert("City not found.");
            return;
        }

        cityName.textContent = data.name;

        temperature.textContent = `${Math.round(data.main.temp)}°C`;

        description.textContent = `Weather: ${data.weather[0].description}`;

        humidity.textContent = `Humidity: ${data.main.humidity}%`;

        wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        let weather = data.weather[0].main;

        if(weather === "Clear"){
            document.body.style.background =
            "linear-gradient(135deg,#FFD54F,#FF9800)";
        }

        else if(weather === "Clouds"){
            document.body.style.background =
            "linear-gradient(135deg,#90A4AE,#CFD8DC)";
        }

        else if(weather === "Rain"){
            document.body.style.background =
            "linear-gradient(135deg,#1565C0,#42A5F5)";
        }

        else if(weather === "Snow"){
            document.body.style.background =
            "linear-gradient(135deg,#ECEFF1,#FFFFFF)";
        }

        else{
            document.body.style.background =
            "linear-gradient(135deg,#4facfe,#00f2fe)";
        }

    })

    .catch(error => {
        alert("Something went wrong.");
        console.log(error);
    });

});