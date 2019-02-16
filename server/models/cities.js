const db = require('../database');

class Cities{
    static retrieveAll(callback){
        db.query('SELECT city_name from cities', (err, res) => {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }

    static insert(city, callback){
        db.query('INSERT INTO cities (city_name) VALES ($1)', [city], (err, res) => {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = Cities;