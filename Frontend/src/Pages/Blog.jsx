import React from "react";
import "./blog.css"
import Header from "../Components/Header";
import CardProjetDescription from "../Components/CardProjetDescription";
import Footer from "../Components/Footer";
import { useEffect } from "react";


export default function Blog({}) {
    

    useEffect(()=>{
        const content = document.getElementsByClassName("content")
        console.log(content)
        content.scrollWidth = 25
    })

    return (
        <div className="blog">
            <Header pageNumber={4}/>
            <main>
                <div className="part1">
                    <h1>BLOG ET ACTUALITES</h1>
                </div>
                <div className="part2">
                    <h2>Vie de l'équipe</h2>
                    <div className="content">
                        <div className="scroll">
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="previous">
                            <img src="/fleche.svg" alt="" />
                            <span>previous</span>
                        </button>
                        <button className="next">
                            <span>next</span>
                            <img src="/fleche.svg" alt="" />
                        </button>
                    </div>
                    
                </div>
                <div className="part2 part3">
                    <h2>Savoirs & Vision</h2>
                    <div className="content">
                        <div className="scroll">
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="previous">
                            <img src="/fleche.svg" alt="" />
                            <span>previous</span>
                        </button>
                        <button className="next">
                            <span>next</span>
                            <img src="/fleche.svg" alt="" />
                        </button>
                    </div>
                </div>
                 <div className="part2 part4">
                    <h2>Formations & événements</h2>
                    <div className="content">
                        <div className="scroll">
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="previous">
                            <img src="/fleche.svg" alt="" />
                            <span>previous</span>
                        </button>
                        <button className="next">
                            <span>next</span>
                            <img src="/fleche.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="part2 part5">
                    <h2>Newsletter / Abonnement</h2>
                    <p>Recevez une fois par mois les  nouvelles de l’univers ERANIS (projets, articles, nouveautés) </p>
                </div>
            </main>
            <Footer/>
        </div>
    )

}