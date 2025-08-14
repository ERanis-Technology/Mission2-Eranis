import React from "react";
import "./footer.css"
import {NavLink} from "react-router-dom"

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
                    <NavLink to="https://x.com"><img src="/x.svg" alt="" /></NavLink>
                    <NavLink to="https://instagram.cm"><img src="/instagram.svg" alt="" /></NavLink>
                    <NavLink to="https://youtube.cm"><img src="/youtube.svg" alt="" /></NavLink>
                    <NavLink to="https://linkedin.cm"><img src="/linkedin.svg" alt="" /></NavLink>
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
                            <li><NavLink to="/*">Acceuil</NavLink></li>
                            <li><NavLink to="/*">Services</NavLink></li>
                            <li><NavLink to="/blog">Blog / Actualités</NavLink></li>
                            <li><NavLink to="/*">Équipes</NavLink></li>
                            <li><NavLink to="/missions">Missions</NavLink></li>
                        </ul>
                    </div>
                    <div className="section section3">
                        <h4>Pour les Entreprises</h4>
                        <ul>
                            <li><a to="">Espace EntreprisePremium</a></li>
                            <li><a to="">Statistiques & Résultats</a></li>
                            <li><a to="">Conditions Générales de vente(CGV)</a></li>
                            <li><a to="">Mentions légales</a></li>
                            <li><a to="">Politique de Confidentialité</a></li>
                        </ul>
                    </div>
                </div>
                <p className="copyright">&copy; 2025 ERANIS, Tous droits réservés</p>
            </div>
        </footer>
    )

}