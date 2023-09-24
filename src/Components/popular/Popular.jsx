import React from  "react"
import "./popular.css"
import img1 from "../../assets/marrakech.jpg"
import img2 from "../../assets/fez.jpg"
import img3 from "../../assets/casa.jpg"



import "aos/dist/aos.css"

const Data = [
    {
        id:1,
        imgSrc:img1,
        location: "Marrakech",
    },
    {
        id:2,
        imgSrc:img2,
        location: "Fez",
    },
    {
        id:3,
        imgSrc:img3,
        location: "Casablanca",
    },
    
]


export default function Popular(){
    
    return(
        <section className="popular section" id='popular-section'>
            <div className="secContainer">
                <div className="secHeader flex">
                    <div data-aos = "fade-right" data-aos-duration = "2500" className="textDiv" >
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>
                            form historical cities to natural
                            spectaculer, come see the best of the world!
                        </p>
                    </div>
                </div>
                <div className="mainContent" >
                    {
                        Data.map(({id, imgSrc, location})=>{
                            return(
                                <div data-aos = "fade-up" className="singleDestinantion" key={id}>
                                    <div className="destImage" >
                                        <img src={imgSrc} alt="Image title" /> 
                                    </div>
                                    <div className="destFooter" >
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