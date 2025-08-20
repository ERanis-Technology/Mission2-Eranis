import React from "react";
import "./missionDescription.css"


export default function MissionDescription({title,content}) {
    
    return(
        <div className="missionDescription">
            <h4>
                <img src="/icon1.svg" alt="" />
                {title}
            </h4>
            <p>{content}</p>
        </div>
    )

}