import React from "react";
import "./blog.css"
import Header from "../Components/Header";
import CardProjetDescription from "../Components/CardProjetDescription";
import Footer from "../Components/Footer";
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Blog({}) {
    const [nom,setNom] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate()

    function abonner(e) {
        e.preventDefault()
        axios.post("http://192.168.43.160:8000/api/newsletter/subscribe/",{
            nom: nom,
            email: email
        })
        .then(res=>{
            console.log({"Succes": res})
            setTimeout(() => {
                navigate("/blog")
            }, 2000);
        })
        .catch(error=>{
            console.log({"Error": error})
        })

    }

    return (
        <div className="blog">
            <Header pageNumber={4}/>
            <main>
                <div className="part1">
                    <h1>BLOG ET ACTUALITES</h1>
                </div>
                <ScrollMenu title={"Vie de l'équipe"}
                    cardList={
                        <>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                        </>
                    }
                    classList={"part2"}
                    position={0}

                />
                <ScrollMenu title={"Savoirs & Vision"}
                    cardList={
                        <>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                        </>
                    }
                    classList={"part2 part3"}
                    position={1}
                />
                <ScrollMenu title={"Formations & évènements"}
                    cardList={
                        (<>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                            <CardProjetDescription/>
                        </>)
                    }
                    classList={"part2 part4"}
                    position={2}

                />
                <div className="part2 part3 part5">
                    <h2>Newsletter / Abonnement</h2>
                    <p className="description">Recevez une fois par mois les  nouvelles de l’univers ERANIS (projets, articles, nouveautés) </p>
                    <form action="" className="register" onSubmit={(e)=>abonner(e)}>
                        <label htmlFor="nom">nom</label>
                        <input type="text" id="nom" className="nom" placeholder="Value" required
                            value={nom} onChange={(e)=>setNom(e.target.value)}
                        />
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" className="email" required
                            value={email} onChange={(e)=>setEmail(e.target.value)}
                        />
                        <button>S’abonner à la newsletter</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    )

}

function ScrollMenu({title, cardList, classList, position}) {

    useEffect(()=>{
        let content = document.querySelectorAll(".content")
        let nextBtn = document.querySelectorAll(".buttons .next")
        let previousBtn = document.querySelectorAll(".buttons .previous")

        nextBtn[position].addEventListener('click',(event)=>{
            content[position].scrollLeft += 50
        })
        previousBtn[position].addEventListener('click',(event)=>{
            content[position].scrollLeft -= 50
        })
        
    })

    return (
        <div className={classList}>
            <h2>{title}</h2>
            <div className="content">
                <div className="scroll">
                    {cardList}
                </div>
            </div>
            <div className="buttons">
                <button className="previous">
                    <img src="/fleche.svg" alt="" />
                    <span>Previous</span>
                </button>
                <button className="next">
                    <span>Next</span>
                    <img src="/fleche.svg" alt="" />
                </button>
            </div>
            
        </div>
    )
    
}