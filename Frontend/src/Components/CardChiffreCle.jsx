import React from "react";
import "./cardChiffreCle.css"


export default function CardChiffreCle({style,number,text}) {
    
    return (
        <div className={`cardChiffreCle ${style}`}>
            <img src="/image9.svg" alt="ruban" />
            <p className="chiffre">+{number}</p>
            <p className="value">{text}</p>
        </div>
    )

}