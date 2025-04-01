fetch("https://api.weather.gov/gridpoints/LWX/96,70/forecast")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        
    })
    .then(response => {
        return response.json()
    })