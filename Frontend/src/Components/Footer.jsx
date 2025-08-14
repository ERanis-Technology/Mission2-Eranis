import React from "react";
import "./footer.css"
import {NavLink} from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function Footer() {
    const [display,setDisplay] = useState("none")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // Pour afficher un message de statut après soumission

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Exemple de traitement : affichage en console pour le moment
        // Vous pouvez remplacer cela par un envoi vers un backend ou un service tiers (voir explication ci-dessous)
        console.log({ name, email, message });
        axios.post("http://192.168.43.160:8000/api/contact/send", {
            nom: name,
            email: email,
            description: message
        }).then(res=>{
                setName('')
                setEmail('')
                setMessage('')
                //console.log(res)
                setStatus('Message envoyé avec succès !');
                setTimeout(() => {
                    setDisplay("none")
                }, 1000);
            }
        )
        .catch(error=>console.log({"Error": error}))
        
        // Simulation d'envoi réussi (remplacez par une vraie requête fetch ou service)
        
        
        // Réinitialisation du formulaire
        
        
    };

    return (
        <footer>
            <form onSubmit={handleSubmit} className="contact-form" style={{display: display}}>
                <label htmlFor="name">Nom :</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="message">Message :</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Envoyer</button>
                
                {status && <p className="status-message">{status}</p>}
            </form>
            <div className="discuter" onClick={()=>setDisplay("flex")}>
                <span>Discutez-en avec notre équipe</span>
                <button>
                    <img src="/next.svg" alt="" />
                </button>
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
                            <li>Email : <a href="https://gmail.com">eranistechnology@gmail.com</a></li>
                            <li>Téléphone : +237 673 115 233</li>
                            <li>Adresse : Yaoundé, Cameroun</li>
                            <li>Horaires : Lun-Ven, 9h à 18h</li>
                            <li onClick={()=>setDisplay("flex")}>Accéder au formulaire de contact</li>
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



