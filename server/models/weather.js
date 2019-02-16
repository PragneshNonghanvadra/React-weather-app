const request = require('request-promise');
const API_KEY = 'd87cb3c819d2d12eea07f095bef895b5';

class Weather {

    static retrieveByCity (city, callback){
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then((res) => {
            callback(res);
        }).catch((err) => {
            console.log(err);
            callback({error: 'Could not reach openWeatherMap API. '})
        })
    }

}

module.exports = Weather;