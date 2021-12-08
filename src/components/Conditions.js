import React from "react";

const Conditions = (props) => {
    return(
        <div>
            {props.error && <small id="Small">Please enter a valid location.</small>}
            {props.loading && <div className="Loader" />}

            {props.responseObj.cod === 200 ?
               <div className="loc-response">
                   <p className="loc-title"><strong>{props.responseObj.name}</strong></p>
                   <img className="weather-icons" alt="weather icon" src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} />
                   <p className="loc-desc">It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }


        </div>
    )
}

export default Conditions