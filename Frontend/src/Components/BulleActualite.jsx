import React from "react"; 
import "./bulleActualite.css"



function BulleActualite({title, description}) {
    
    return (
        <div className="bulleActualite">
            <h4>{title}</h4>
            <div className="main">
                <span className="description">{description}</span>
                <div className="briefing">

                </div>
            </div>
            <div className="footer">
                <button>
                    <span>En savoir plus</span>
                    <img src="/next.svg" alt="" />
                </button>
                <p className="time">4 min</p>
            </div>
        </div>
    )

}

export default BulleActualite