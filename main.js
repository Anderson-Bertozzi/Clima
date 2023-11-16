function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        alert("Não é suportado em seu navegador")
    }
}

function showWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude

    const weatherURL = `https://api.weatherapi.com/v1/current.json?key=c7b9ea3547f4433e974184823230806&q= ${latitude}, ${longitude}`;

    fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
            const locationElement = document.getElementById("location");
            const temperatureElement = document.getElementById("temperature");

            const region = data.location.region;
            const country = data.location.country;
            const temperature = data.current.temp_c;

            locationElement.textContent = `${region}, ${country}`;
            temperatureElement.textContent = `${temperature} °C`;
        })
        .catch(error => {
            console.log("Error", error);
            alert("Erro na Busca do Clima");
        });
}

getLocation();