import React from "react";
import "./caracteristiques.css"


export default function Caracteristiques({title,content}) {
    
    return (
        <div className="caracteristiques">
            <h4>
                <img src="/icon2.svg" alt="" />
                {title}
            </h4>
            <p>{content}</p>
        </div>
    )

}