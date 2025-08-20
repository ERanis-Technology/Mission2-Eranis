import React from "react";
import "./cardMissions.css"


export default function CardMissions({background2,title,content}) {
    
    return (
        <div className={`cardMissions ${background2}`}>
            <div className="icone">
                <img src="/laptop.svg" alt=""/>
            </div>
            <h3>{title}</h3>
            <div className="text">
                {content}
            </div>
            <button>
                <span>En savoir plus</span>
                <img src="/fleche.svg" alt="" />
            </button>
        </div>
    ) 

}