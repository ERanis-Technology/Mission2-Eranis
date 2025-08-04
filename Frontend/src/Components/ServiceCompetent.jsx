import React from "react";
import "./serviceCompetent.css"



export default function ServiceCompetent({}) {
    
    return (
        <div className="serviceCompetent">
            <img src="/image7.png" alt="service" className="domaine-image"/>
            <h4>Développement de solutions digitales</h4>
            <p>
                Nous concevons et développons des solutions
                digitales sur mesure, adaptables aux besoins
                spécifiques de chaque entreprise. Que ce soit pour
                automatiser vos processus internes, fluidifier votre
                relation client ou optimiser vos ventes, notre expertise
                couvre l'ensemble du cycle de vie logiciel.
            </p>
            <button>
                En savoir plus
                <img src="/next.svg" alt="" />
            </button>
        </div>
    )

}