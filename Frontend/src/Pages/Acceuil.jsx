import React from "react";
import "./acceuil.css"
import Header from "../Components/Header";
import MissionDescription from "../Components/MissionDescription";
import ServiceCompetent from "../Components/ServiceCompetent";
import BulleActualite from "../Components/BulleActualite";
import CardChiffreCle from "../Components/CardChiffreCle";
import Footer from "../Components/Footer";


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
                    <p className="description">Nous accompagnons les entreprises et les professionnels avec des solutions innovantes et sur mesure.</p>
                    <div className="content">
                        <ServiceCompetent image={"/image7.png"} 
                            title={"Développement de solutions digitales"} 
                            content={"Nous concevons et développons des solutions digitales sur mesure, adaptables aux besoins spécifiques de chaque entreprise. Que ce soit pour automatiser vos processus internes, fluidifier votre relation client ou optimiser vos ventes, notre expertise couvre l'ensemble du cycle de vie logiciel."}
                        />
                        <ServiceCompetent  image={"/image10.png"} 
                            title={"Robotique intelligente"} 
                            content={"Nous développons des systèmes robotiques autonomes et semi-autonomes pour les secteurs industriels, logistiques et agricoles. Chaque solution est pensée pour augmenter l'efficacité, réduire la pénibilité humaine et apporter de la précision aux tâches critiques."}
                        />
                        <ServiceCompetent image={"/image12.png"} 
                            title={"Intelligence Artificielle & Automatisation"} 
                            content={"Nous développons des systèmes robotiques autonomes et semi-autonomes pour les secteurs industriels, logistiques et agricoles. Chaque solution est pensée pour augmenter l'efficacité, réduire la pénibilité humaine et apporter de la précision aux tâches critiques."}
                        />
                        <ServiceCompetent image={"/image4.png"} 
                            title={"Design UX/UI & Prototypage"} 
                            content={"L’expérience utilisateur est au cœur de nos conceptions. Nous créons des interfaces fonctionnelles, esthétiques et intuitives grâce à une démarche centrée utilisateur. Nos prototypes interactifs permettent de valider rapidement les concepts avant le développement."}
                        />
                    </div>
                </div>
                <div className="part3 part4">
                    <h2>Projets & Innovations</h2>
                    <p className="description">Nous accompagnons les entreprises et les professionnels avec des solutions innovantes et sur mesure.</p>
                    <div className="content">
                        <ServiceCompetent image={"/image6.png"} 
                            title={"Projet MIRA – Bras robotisé intelligent pour la logistique"} 
                            content={"Face aux défis de la logistique en Afrique, ERANIS a conçu MIRA, un bras robotisé autonome pensé pour automatiser les tâches de tri, de manutention et de conditionnement en entrepôt."}
                        />
                        <ServiceCompetent  image={"/image11.png"} 
                            title={"YNNOVASS Platform – Générateur de templates"} 
                            content={"Les entreprises manquent souvent de temps pour concevoir des documents et interfaces métiers sur mesure. YNNOVASS répond à ce besoin avec une bibliothèque intelligente de modèles digitaux adaptables."}
                        />
                        <ServiceCompetent image={"/image13.png"} 
                            title={"EranisBot – Chatbot IA multilingue pour l’assistance client"} 
                            content={"Dans un monde globalisé, offrir une assistance fluide et disponible 24h/24 est crucial. EranisBot est une IA conversationnelle entraînée pour interagir avec vos clients dans plusieurs langues africaines et internationales."}
                        />
                        <ServiceCompetent image={"/image15.png"} 
                            title={"AgroTrack – Système de suivi intelligent pour l’agriculture connectée"} 
                            content={"L’agriculture africaine fait face à des défis de rendement, de suivi et de durabilité. AgroTrack, développé par ERANIS, est une solution IoT & IA qui permet aux agriculteurs de suivre l’état de leurs cultures en temps réel pour optimiser les récoltes."}
                        />
                    </div>
                </div>
                <div className="part3 part5">
                    <h2>Actualités</h2>
                    <p className="description">Restez informé des tendances du digital, des nouveautés YNNOVASS et des retours d'expérience sur nos projets. Découvrez nos
                        trois derniers articles pour suivre notre évolution, mieux comprendre nos expertises, et anticiper les innovations à venir.
                    </p>
                    <div className="caroussel">
                        <BulleActualite/>
                    </div>
                </div>
                <div className="part3 part6">
                    <h2>Chiffres Clés</h2>
                    <p className="description">
                        Une croissance portée par la confiance de nos clients et la
                        passion de nos talents. Ces chiffres témoignent de notre
                        engagement et de notre impact dans l'écosystème numérique.
                    </p>
                    <div className="figures">
                        <img src="/image5.png" alt="" />
                        <img src="/image14.png" alt="" />
                        <img src="/image2.png" alt="" />
                    </div>
                    <div className="content">
                        <CardChiffreCle style={"style1"}
                            number={"50"}
                            text={"Projets livrés avec succès"}
                        />
                        <CardChiffreCle style={"style2"}
                            number={"100"}
                            text={"Experts et créatifs mobilisés"}
                        />
                        <CardChiffreCle style={"style2"}
                            number={"3"}
                            text={"Pays d'intervention en Afrique et au-delà"}                        
                        />
                        <CardChiffreCle style={"style2"}
                            number={"10"}
                            text={"Prototypes fontionnels dévelopés en interne"}                        
                        />
                    </div>
                </div>
                <div className="part3 part7">
                    <h2>Offre Entreprises Premium</h2>
                    <p className="description">YNNOVASS Templates — Gagnez du temps, gagnez en impact en optant pour nos Templates Premium prêts à l’emploi : pensés
                        pour les entreprises ambitieuses, optimisés pour la performance, personnalisables en quelques clics.
                    </p>
                    <div className="content">

                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )

}


export default Acceuil
