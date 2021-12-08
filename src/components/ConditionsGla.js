import React from "react";

const ConditionsGla = (props) => {
    return(
        <div>
            {props.loading && <div className="Loader" />}

            {props.responseObj.cod === 200 ?
               <div className="gla-response">
                   <p className="gla-title"><strong>{props.responseObj.name}</strong></p>
                   <img className="weather-icons" alt="weather icon" src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} />
                   <p className="gla-desc">It is currently {Math.round(props.responseObj.main.temp)}C out with {props.responseObj.weather[0].description}. </p>
               </div>
           : null
           }


        </div>
    )
}

export default ConditionsGla