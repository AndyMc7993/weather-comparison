import React from "react";
import img from '../images/Gsq.png'
import '../App.css'

function Footer(){
    return(
        <div className="footer">
            <a href="https://www.statista.com/chart/7314/europes-gloomiest-cities/" className="gloom-link">Glasgow is one of the gloomiest cities in Europe. </a>
            <div className="joke-part">
                <p className="joke">On the odd chance your weather is worse than mine, <br /> assume I'll be sunbathing no matter the temperature! 😎</p>
                <img src={img} className="foot-img"></img>
            </div>
            <p className="creds">Created by Andy McInnes, in Glasgow 🌧️ 2021<br />
            View <a className="pf-link">my portfolio here</a></p>

        </div>
        
    )
}

export default Footer