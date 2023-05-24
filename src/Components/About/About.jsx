import React from "react"
import "./about.css"

import img from "../../assets/summit-toubkal-morocco.jpg"
import img1 from "../../assets/PHOTO-2019-10-31-10-50-32.jpg"
import img2 from "../../assets/1662101309_3-gas-kvas-com-p-beautiful-photos-of-people-in-the-city-mar-4.jpg"
import video from "../../assets/yt5s.io-Morocco - Kingdom of Light-(1080p) (1).mp4"

import Aos from "aos"
import "aos/dist/aos.css"




export default function About(){

    React.useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="about section">
            <div className="secContainer">
                <h1 className="title">
                    Join a Trip
                </h1>
                <div className="mainContent  grid">
                    <div data-aos = "fade-up" data-aos-duration = "2000" className="singleItem">
                        <img src={img} alt="" />
                        <a href="https://web.facebook.com/groups/117486684952823/user/100041114264545">Atlas Toubkal</a>

                        <p>
                        Embark on a thrilling adventure in Morocco's High Atlas Mountains. Conquer North Africa's highest peak, admire breathtaking vistas, and immerse yourself in the cultural heritage of the local communities.                        
                        </p>
                        
                    </div>

                    <div data-aos = "fade-up" data-aos-duration = "2500" className="singleItem">
                        <img src={img1} alt="" />
                        <a href="https://web.facebook.com/profile.php?id=100066736124257">Sahara Trip</a>

                        <p>
                        Embark on an unforgettable journey into the vast expanse of the Sahara Desert. Traverse golden dunes that stretch endlessly, immersing yourself in the timeless beauty of this otherworldly landscape.                        </p>
                    </div>

                    <div data-aos = "fade-up" data-aos-duration = "3000" className="singleItem">
                        <img src={img2} alt="" />
                        <a href="https://web.facebook.com/moroccotourtrip/?_rdc=1&_rdr">Marrakech</a>

                        <p>
                        Immerse yourself in the vibrant tapestry of Marrakech, a city that captivates the senses and enchants the soul. Wander through the bustling medina, where narrow streets come alive with a kaleidoscope of colors, exotic scents, and the rhythmic sounds of artisans at work.                         </p>

                    </div>
                </div>

                <div className="videoCard ">
                    <div className="cardContent grid">
                        <div data-aos = "fade-left" data-aos-duration = "2000" className="cardVideo">
                            <video src={video} autoPlay muted loop type="video/mp4"></video>
                        </div>

                        <div data-aos = "fade-right" data-aos-duration = "2000" className="cardText">
                            <h2>
                                Your next trip starts here
                            </h2>
                            <p>
                            Explore Morocco's wonders - vibrant medinas, ancient streets, flavorful cuisine, and the majestic Sahara Desert. Embark on an unforgettable journey through captivating landscapes and rich cultural heritage. Let us guide you through the heart of Morocco.
                            </p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}