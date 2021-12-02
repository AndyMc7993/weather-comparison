import React, { useState } from "react";
import Conditions from "./Conditions";

const GlaForecast = () => {

    let [responseObj, setResponseObj] = useState({});

    function getForecast() {

        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Glasgow&units=metric", {
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
           <h2>Find My Current Weather Conditions</h2>
           <button onClick={getForecast}>Get My Forecast</button>
           <Conditions
               responseObj={responseObj}
               />
       </div>
    )
}

export default GlaForecast