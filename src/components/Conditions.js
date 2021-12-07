import React from "react";

const Conditions = (props) => {
    return(
        <div>
            {props.error && <small id="Small">Please enter a valid location.</small>}
            {props.loading && <div className="Loader" />}

            {props.responseObj.cod === 200 ?
               <div>
                   {document.getElementById("Small").innerHTML=""}
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }


        </div>
    )
}

export default Conditions