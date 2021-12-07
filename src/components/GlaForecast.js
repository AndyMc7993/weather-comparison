import React, { useState } from "react";
import ConditionsGla from "./ConditionsGla";
import '../App.css'

const GlaForecast = (e) => {

    let [responseObj, setResponseObj] = useState({});
    let [unit, setUnit] = useState('metric');

    function getForecast() {

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=Glasgow&units=${unit}`, {
        "method": "GET",
        "headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
           "x-rapidapi-key": process.env.REACT_APP_API_KEY
	    }
        })
        .then(response => response.json())
        .then(response => {
           setResponseObj(response)
       })
    }

    return(
        <div className="gla-forecast">
           <h2>1. Check the weather in Glasgow</h2>
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
            <button onClick={getForecast}>Reveal</button>
           <ConditionsGla
               responseObj={responseObj}
               />
       </div>
    )
}

export default GlaForecast