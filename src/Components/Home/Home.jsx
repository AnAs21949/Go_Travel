import React from "react";
import "./home.css"

import Aos from "aos"
import "aos/dist/aos.css"
import video from "../../assets/final_video.mp4"


export default function Home(){

    React.useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


   
    function scrollPage(anchor) {
        // Change "elementId" to the ID of the element you want to attach the click event to
        const id =`${anchor}-section`
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({
                behavior:"smooth",
                block:"end"
            })
        }
    }
      

    return(
        <section className="home">
                    <video src={video} autoPlay muted loop type="video/mp4"></video>    
            <div className="secContainer container">
            <div className="homeText">
                    <h1 data-aos = "fade-up" className="title">
                    Explore the Wonders of Morocco: Your Gateway to Unforgettable Adventures
                    </h1>
                    
                    <button id="elementId"  data-aos = "fade-up" data-aos-duration = "3000" className="btn" >
                        <a  onClick={() => scrollPage('popular')} >Explore Now</a>
                    </button>
                </div>
            </div>
        </section>
    )
}