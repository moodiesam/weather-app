async function getWeather(input) {
    try {
        const search = input;
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=55f350086d0945ecb8d143606230911&q=' +search, {mode: 'cors'})
        const weatherData = await response.json();
        const weatherLocation = weatherData.location.name;
        const weatherRegion = weatherData.location.region;
        const weatherTempC = weatherData.current.temp_c;
        const weatherCondition = weatherData.current.condition.text;

        return [weatherLocation, weatherRegion, weatherTempC, weatherCondition];
    } catch(error) {
        console.log(error)
    }
};

const form = document.getElementById('form');
const btn = document.getElementById('searchBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchLocation = document.getElementById('location').value;
    const locationDiv = document.getElementById('locationDiv');
    const regionDiv = document.getElementById('regionDiv');
    const tempDiv = document.getElementById('tempDiv');
    const conditionsDiv = document.getElementById('conditionsDiv');

    getWeather(searchLocation).then(([weatherLocation, weatherRegion, weatherTempC, weatherCondition]) => {
        locationDiv.innerHTML = weatherLocation;
        regionDiv.innerHTML = weatherRegion;
        tempDiv.innerHTML = weatherTempC;
        conditionsDiv.innerHTML = weatherCondition;
    });
    form.reset();
})


// getWeather().then(([weatherLocation, weatherRegion, weatherTempC, weatherCondition]) => {
//     console.log(weatherLocation)
//     console.log(weatherRegion)
//     console.log(weatherTempC)
//     console.log(weatherCondition)
// })

