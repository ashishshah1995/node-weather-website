const request = require("request");


const forecast = (latitude, longitude, callback) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=f1c5a465f83a507227b3b80e03dedb5d&units=metric";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined);

        } else if (body.message) {
            callback("Unable to find location", undefined)

        }
        else {
            callback(undefined, "Today " + body.weather[0].description + ". It is currently " + body.main.temp + " degree out there. High today is " + body.main.temp_max+ " with a low of " +body.main.temp_min +"." )

        }
    })

}

module.exports = forecast