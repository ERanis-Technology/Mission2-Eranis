import React from "react";
import "./serviceCompetent.css"



export default function ServiceCompetent({image,title,content}) {
    
    return (
        <div className="serviceCompetent">
            <img src={image} alt="service" className="domaine-image"/>
            <h4>{title}</h4>
            <span>
                {content}
            </span>
            <button>
                En savoir plus
                <img src="/next.svg" alt="" />
            </button>
        </div>
    )

}