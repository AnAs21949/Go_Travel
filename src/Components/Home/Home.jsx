import React from "react";
import "./home.css"

import Aos from "aos"
import "aos/dist/aos.css"
import video from "../../assets/final_video.mp4"


export default function Home(){

    React.useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    function scrollPageDown() {
        // Change "elementId" to the ID of the element you want to attach the click event to
        var element = document.getElementById("elementId");
      
        if (element) {
          element.addEventListener("click", function() {
            // Change "scrollPosition" to the desired scroll position in pixels
            var scrollPosition = 800; // Example: scrolling to 500 pixels
            
            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth"
            });
          });
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
                    {/* <p data-aos = "fade-up" data-aos-duration = "2500" className="subtitle">
                        Travel to your favourite city respectful of
                        the environnement
                    </p> */}
                    <button id="elementId" onClick={scrollPageDown} data-aos = "fade-up" data-aos-duration = "3000" className="btn" >
                        <a href="#"  >Explore Now</a>
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