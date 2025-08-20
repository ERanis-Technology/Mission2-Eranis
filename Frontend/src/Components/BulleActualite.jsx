import React from "react"; 
import "./bulleActualite.css"



function BulleActualite({}) {
    
    return (
        <div className="bulleActualite">
            <h4>Retour sur notre dernier projet e-commerce pour une marque africaine</h4>
            <div className="main">
                <span className="description">
                    Nous avons récemment collaboré avec Kossa, une marque de cosmétiques naturels basée au Bénin,
                    pour concevoir une plateforme e-commerce moderne, performante et pensée mobile-first.
                </span>
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