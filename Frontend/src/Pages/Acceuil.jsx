import React from "react";
import "./acceuil.css"
import Header from "../Components/Header";
import MissionDescription from "../Components/MissionDescription";
import ServiceCompetent from "../Components/ServiceCompetent";


function Acceuil() {
    
    return(
        <div className="acceuil">
            <Header/>
            <main>
                <div className="part1">
                    <div className="messages">
                        <h1>
                            <span>ERANIS </span>: Le moteur digital de vos talents et projets d'avenir
                        </h1>
                        <h5>Rejoignez une plateforme qui connecte les talents d’excellence aux projets les
                            plus ambitieux en Afrique et au-delà
                        </h5>
                    </div>
                    <div className="illustrations">
                        <img src="/image1.png" alt="" />
                        <img src="/image8.png" alt="" />
                        <img src="/image3.png" alt="" />
                    </div>
                </div>
                <div className="part2">
                    <p className="description">
                        ERANIS est une plateforme digitale née d’un besoin clair : <span>créer un espace
                        structuré, évolutif et performant pour connecter les meilleurs talents aux projets
                        les plus ambitieux.</span>
                    </p>
                    <div className="missions">
                        <h3>Notre mission est triple : </h3>
                        <div className="content">
                            <MissionDescription 
                                title={"Valoriser les professionnels"} 
                                content={"à travers un système d'évaluation régulier, des missions ciblées et un classement transparent."}
                            />
                            <MissionDescription
                                title={"Accompagner les entreprises"} 
                                content={"dans la réalisation de leurs objectifs grace à des outils, des modèles et une équipe expérimentée."}
                            />
                            <MissionDescription
                                title={"Faciliter la montée en compétences"} 
                                content={"continue des talents via des ressources exclusives, des formations ciblées et un accompagnement personnalisé."}
                            />
                        </div>
                    </div>
                    <button>
                        En savoir plus sur notre vision
                        <img src="/next.svg" alt="" />
                    </button>
                </div>
                <div className="part3">
                    <h2>Nos Services</h2>
                    <p>Nous accompagnons les entreprises et les professionnels avec des solutions innovantes et sur mesure.</p>
                    <div className="content">
                        <ServiceCompetent/>
                        <ServiceCompetent/>
                        <ServiceCompetent/>
                        <ServiceCompetent/>
                    </div>
                </div>
            </main>
        </div>
    )

}


export default Acceuil
