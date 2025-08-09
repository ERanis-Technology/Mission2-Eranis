import React from "react";
import "./footer.css"


export default function Footer() {
    
    return (
        <footer>
            <div className="discuter">
                <span>Discutez-en avec notre équipe</span>
                <a href="">
                    <img src="/next.svg" alt="" />
                </a>
            </div>
            <div className="footer">
                <div className="medias">
                    <a href=""><img src="/x.svg" alt="" /></a>
                    <a href=""><img src="/instagram.svg" alt="" /></a>
                    <a href=""><img src="/youtube.svg" alt="" /></a>
                    <a href=""><img src="/linkedin.svg" alt="" /></a>
                </div>
                <div className="sections">
                    <h2>Façonnée <br/>pour l’Afrique, pensée pour l’avenir.</h2>
                    <div className="section section1">
                        <h4>Contact & Support</h4>
                        <ul>
                            <li>Email : contact@eranis.tech</li>
                            <li>Téléphone : +237 6 XX XX XX XX</li>
                            <li>Adresse : Yaoundé, Cameroun</li>
                            <li>Horaires : Lun-Ven, 9h à 18h</li>
                            <li>Accéder au formulaire de contact</li>
                        </ul>
                    </div>
                    <div className="section section2">
                        <h4>Navigation Rapide</h4>
                        <ul>
                            <li><a href="">Acceuil</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Blog / Actualités</a></li>
                            <li><a href="">Équipes</a></li>
                            <li><a href="">Missions</a></li>
                        </ul>
                    </div>
                    <div className="section section3">
                        <h4>Pour les Entreprises</h4>
                        <ul>
                            <li><a href="">Espace EntreprisePremium</a></li>
                            <li><a href="">Statistiques & Résultats</a></li>
                            <li><a href="">Conditions Générales de vente(CGV)</a></li>
                            <li><a href="">Mentions légales</a></li>
                            <li><a href="">Politique de Confidentialité</a></li>
                        </ul>
                    </div>
                </div>
                <p className="copyright">&copy; 2025 ERANIS, Tous droits réservés</p>
            </div>
        </footer>
    )

}