
fetch("https://api.weather.gov/gridpoints/LWX/96,70/forecast")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let temp = data["properties"]["periods"][0]["temperature"];
        let rain_pro = data["properties"]["periods"][0]["probabilityOfPrecipitation"]["value"];

        if (rain_pro === null || rain_pro === undefined) {
            rain_pro = 0;
        }

        console.log(rain_pro);
        console.log(typeof rain_pro);

        const rain = document.getElementById("rain");
        if (rain) rain.innerHTML = rain_pro + "%";

        const temperature = document.getElementById("temperature");
        if (temperature) temperature.innerHTML = temp + "°F";

        console.log(temperature);
    })
    .catch(error => console.error("Error fetching weather data:", error));

