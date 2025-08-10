import React from "react";
import "./header.css"
import { useEffect,useState } from "react";


function Header() {

    return (
        <div id="header">
            <a href="#" className="logo">
                <img src="/logo.png" alt="eranis" />
            </a>
            <ul>
                <li><a href="">Services & Projets</a></li>
                <li><a href="">Missions</a></li>
                <li><a href="">Équipe</a></li>
                <li><a href="">Blog</a></li>
            </ul>
            <div className="buttons">
                <a href="">se connecter</a>
                <a href="">s'inscrire</a>
            </div>
        </div>
    )

}

export default Header