import React from "react";
import color from '../images/Vector1.png'
import img from '../images/Gsq.png'

function Footer(){
    return(
        <div className="footer">
            <a href="https://www.statista.com/chart/7314/europes-gloomiest-cities/" className="gloomy">Unfortunately, Glasgow is one of the gloomiest cities in Europe. </a>
            <p>On the odd chance your weather is worse than mine, assume I'll be sunbathing no matter the temperature 😎</p>
            <img src={img} className="foot-img"></img>
            <p>Created by Andy McInnes, in Glasgow 🌧️ 2021</p>
        </div>
        
    )
}

export default Footer