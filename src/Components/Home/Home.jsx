import React from "react";
import "./home.css"

import Aos from "aos"
import "aos/dist/aos.css"
import video from "../../assets/final_video.mp4"


export default function Home(){

    React.useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    return(
        <section className="home">
                    <video src={video} autoPlay muted loop type="video/mp4"></video>    
            <div className="secContainer container">
            <div className="homeText">
                    <h1 data-aos = "fade-up" className="title">
                        Plan Your Trip With Travel Dot
                    </h1>
                    <p data-aos = "fade-up" data-aos-duration = "2500" className="subtitle">
                        Travel to your favourite city respectful of
                        the environnement
                    </p>
                    <button data-aos = "fade-up" data-aos-duration = "3000" className="btn">
                        <a href="#">Explore Now</a>
                    </button>
                </div>

                {/* <div className="homeCard grid">

                    <div data-aos = "fade-right" data-aos-duration = "2000" className="locationDiv">
                        <label htmlFor="location">location</label>
                        <input type="text" placeholder="Dream Destination"/>
                    </div>

                    <div data-aos = "fade-right" data-aos-duration = "2000" className="disDiv">
                        <label htmlFor="distance">location</label>
                        <input type="text" placeholder="11/Meters"/>
                    </div>

                    <div data-aos = "fade-right" data-aos-duration = "3000" className="priceDiv">
                        <label htmlFor="price">location</label>
                        <input type="text" placeholder="140$-$500"/>
                    </div>

                    <button data-aos = "fade-left" data-aos-duration = "2500" className="btn">
                        search
                    </button>
                </div> */}
            </div>
        </section>
    )
}