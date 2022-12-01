document.addEventListener('DOMContentLoaded', cityWeather)


function weatherDataFetch(city) {
    const key = '7283fe926a327977fed55a5cb6165e9b';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function () {
            //catch any errors
        })
}

function cityWeather(e) {
    weatherDataFetch('Tallinn')
}