import React from "react";
import "./cardTemoignages.css"


export default function CardTemoignages({profil_image,temoignage,nom}) {
    
    return (
        <div className="cardTemoignages">
            <img src={profil_image} alt="" className="profil" />
            <div className="temoignage">
                <p className="message">
                    {temoignage}
                </p>
                <br />
                <p className="nom">
                    - {nom}
                </p>
            </div>
        </div>
    )

}