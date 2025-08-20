import React from "react";
import "./header.css"
import { useEffect,useState } from "react";
import {NavLink} from "react-router-dom"


function Header({pageNumber}) {

    useEffect(()=>{
            const currentPage  = document.getElementsByClassName("pages")
            currentPage[0].childNodes[parseInt(pageNumber-1)].setAttribute("class","selected")            
    },[])

    return (
        <div id="header">
            <a href="#" className="logo">
                <img src="/logo.png" alt="eranis" />
            </a>
            <ul className="pages">
                <li><NavLink to="/services">Services & Projets</NavLink></li>
                <li><NavLink to="/missions">Missions</NavLink></li>
                <li><a href="">Équipe</a></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </div>
    )

}

export default Header