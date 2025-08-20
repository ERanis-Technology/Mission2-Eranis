import React from "react";
import "./missions.css"
import Header from "../Components/Header";
import CardMissions from "../Components/CardMissions";
import CardTemoignages from "../Components/CardTemoignages";
import Footer from "../Components/Footer";


export default function Missions() {
    
    return (
        <div className="missions">
            <Header pageNumber={2}/>
            <main>
                <div className="part1">
                    <div className="messages">
                        <p>
                            <span>______________ </span>retour à l'eden<span> _______________</span>
                        </p>
                        <h1>NOS Missions</h1>
                    </div>
                    <div className="images">
                        <img src="/image18.png" alt="" />
                        <img src="/light.svg" alt="" />
                        <img src="/light.svg" alt="" />
                        <img src="/light.svg" alt="" />
                    </div>
                </div>
                <div className="part2">
                    <CardMissions background2={""} 
                        title={"Mission 1: YNNOVAS"}
                        content={
                            <span>YNNOVASS est une plateforme de freelance camerounaise pour les etudiants</span>
                        }
                    />
                    <CardMissions  background2={"background2"} 
                        title={"Mission 2: Naissance+"}
                        content={
                            <span>
                                <ul>
                                    <li>Application web/mobile de génération et traçabilité des actes.</li>
                                    <li>Intégration avec les mairies (base de données sécurisée).</li>
                                </ul>
                            </span>
                        }
                    />
                    <CardMissions background2={""} 
                        title={"Mission 3: SchoolPack"}
                        content={
                            <span>
                                <ul>
                                    <li>Marketplace de fournitures groupées + revente de tenues</li>
                                    <li>Scan IA des listes scolaires + géolocalisation des librairies.</li>
                                </ul>
                            </span>
                        }
                    />
                    <CardMissions background2={""} 
                        title={"Mission 3: SchoolPack"}
                        content={
                            <span>
                                <ul>
                                    <li>Marketplace de fournitures groupées + revente de tenues</li>
                                    <li>Scan IA des listes scolaires + géolocalisation des librairies.</li>
                                </ul>
                            </span>
                        }
                    />
                    <CardMissions background2={""} 
                        title={"Mission 3: SchoolPack"}
                        content={
                            <span>
                                <ul>
                                    <li>Marketplace de fournitures groupées + revente de tenues</li>
                                    <li>Scan IA des listes scolaires + géolocalisation des librairies.</li>
                                </ul>
                            </span>
                        }
                    />
                    <CardMissions background2={""} 
                        title={"Mission 3: SchoolPack"}
                        content={
                            <span>
                                <ul>
                                    <li>Marketplace de fournitures groupées + revente de tenues</li>
                                    <li>Scan IA des listes scolaires + géolocalisation des librairies.</li>
                                </ul>
                            </span>
                        }
                    />
                </div>
                <div className="part3">
                    <h2>
                        <p>TEMOIGNAGES</p>
                        <img src="/image18.png" alt="" />
                    </h2>
                    <div className="content">
                        <CardTemoignages profil_image={"/image17.png"}
                            temoignage={<span>J’ai confié la création de toute l’identité visuelle de Syla Beauty à ERANIS, et je n’ai jamais regretté ce choix. Du logo à la charte graphique, en passant par le slogan et la carte de visite, tout a été
                                        conçu avec goût, sens du détail et une vraie vision professionnelle. Grâce à ce branding soigné,
                                        mon salon en France attire une clientèle qui s’identifie à nos valeurs de beauté, de finesse et de
                                        confiance. Merci pour ce travail sérieux, moderne et profondément inspiré.
                                </span>
                            }
                            nom={"Nguefack Saurelle, Fondatrice de Syla Beauty( saurelleTaylor35@gmail.com)"}
                        />
                        <CardTemoignages profil_image={"/image18.png"}
                            temoignage={<span>J’ai confié la création de toute l’identité visuelle de Syla Beauty à ERANIS, et je n’ai jamais regretté ce choix. Du logo à la charte graphique, en passant par le slogan et la carte de visite, tout a été
                                        conçu avec goût, sens du détail et une vraie vision professionnelle. Grâce à ce branding soigné,
                                        mon salon en France attire une clientèle qui s’identifie à nos valeurs de beauté, de finesse et de
                                        confiance. Merci pour ce travail sérieux, moderne et profondément inspiré.
                                </span>
                            }
                            nom={"Nguefack Saurelle, Fondatrice de Syla Beauty( saurelleTaylor35@gmail.com)"}
                        />
                        <CardTemoignages profil_image={"/image17.png"}
                            temoignage={<span>J’ai confié la création de toute l’identité visuelle de Syla Beauty à ERANIS, et je n’ai jamais regretté ce choix. Du logo à la charte graphique, en passant par le slogan et la carte de visite, tout a été
                                        conçu avec goût, sens du détail et une vraie vision professionnelle. Grâce à ce branding soigné,
                                        mon salon en France attire une clientèle qui s’identifie à nos valeurs de beauté, de finesse et de
                                        confiance. Merci pour ce travail sérieux, moderne et profondément inspiré.
                                </span>
                            }
                            nom={"Nguefack Saurelle, Fondatrice de Syla Beauty( saurelleTaylor35@gmail.com)"}
                        />

                        <form action="">
                            <textarea name="temoignage" id="temoignage" cols="30" rows="10" placeholder="Ajouter un témoignage : "></textarea>
                            <div className="buttons">
                                <input type="reset" value="Annuler"/>
                                <input type="submit" value="Envoyer"/>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )

}