import React from "react";

const ConditionsGla = (props) => {
    return(
        <div>
            {props.loading && <div className="Loader" />}

            {props.responseObj.cod === 200 ?
               <div>
                   <p className="gla-title"><strong>{props.responseObj.name}</strong></p>
                   <p className="gla-desc">It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description} <img className="weather-icons" alt="weather icon" src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} /></p>
               </div>
           : null
           }


        </div>
    )
}

export default ConditionsGla