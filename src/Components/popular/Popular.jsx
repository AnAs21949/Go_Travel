import React from  "react"
import "./popular.css"
import {BsArrowLeftShort} from"react-icons/bs"
import {BsArrowRightShort} from"react-icons/bs"
import {BsDot} from"react-icons/bs"
import img1 from "../../assets/marrakech.jpg"
import img2 from "../../assets/fez.jpg"
import img3 from "../../assets/casa.jpg"



import "aos/dist/aos.css"

const Data = [
    {
        id:1,
        imgSrc:img1,
        destTitle: "casa",
        location: "Marrakech",
        grade: "spann edd",
    },
    {
        id:2,
        imgSrc:img2,
        destTitle: "casa",
        location: "Fez",
        grade: "spann edd",
    },
    {
        id:3,
        imgSrc:img3,
        destTitle: "casa",
        location: "Casablanca",
        grade: "spann edd",
    },
    
]


export default function Popular(){
    
    


    return(
        <section className="popular section ">
            
            <div className="secContainer">

                <div className="secHeader flex">
                    <div data-aos = "fade-right" data-aos-duration = "2500" className="textDiv">
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>
                            form historical cities to natural
                            spectaculer, come see the best of the world!
                        </p>

                    </div>
                    {/* <div data-aos = "fade-left" data-aos-duration = "2500" className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon"/>
                        <BsArrowRightShort className="icon"/>
                    </div> */}
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id, imgSrc, destTitle, location, grade})=>{
                            return(
                                <div data-aos = "fade-up" className="singleDestinantion">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image title" />

                                        {/* <div className="overlayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>{grade} </p>

                                            
                                        </div> */}
                                        
                                    </div>

                                    <div className="destFooter">
                                        <div className="destText flex">
                                            <h6>{location}</h6>
                                            
                                        </div>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}