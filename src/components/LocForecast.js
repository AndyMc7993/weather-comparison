import React, { useState } from "react";
import Conditions from "./Conditions";
import '../App.css'

const LocForecast = () => {

    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e) {
        e.preventDefault();

        if (city.length === 0) {
            return setError(true);
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${uriEncodedCity}&appid=${process.env.REACT_APP_API_KEY}`)
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
                <button type="submit">Reveal</button>
            </form>
           <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />
            <hr />
        </div>
    )
}

export default LocForecast