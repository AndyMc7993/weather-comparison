import React, { useState } from "react";
import Conditions from "./Conditions";
import '../App.css'

const LocForecast = () => {

    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
           "x-rapidapi-key": process.env.REACT_APP_API_KEY
	    }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()}
           setResponseObj(response)
           setLoading(false)
       })
       .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
    }

    return(
        <div className="loc-forecast">
           <h2>2. Check the weather where you are</h2>
           <form onSubmit={getForecast}>
                <input
                    className="text-input"
                    type="text"
                    placeholder="Enter town / city"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <br />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <br />
                <button type="submit">Reveal</button>
            </form>
           <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />
        </div>
    )
}

export default LocForecast