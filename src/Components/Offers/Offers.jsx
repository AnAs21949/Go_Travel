import React from "react"
import "./offers.css"
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from "react-icons/md"
import {FaWifi} from "react-icons/fa"
import { BsArrowRightShort } from "react-icons/bs"

import imgCycling from "../../assets/cycling.jpeg"
import imgHiking from "../../assets/hiking.jpeg"
import imgBiking from "../../assets/M_biking.jpeg"
import imgRiver from "../../assets/river.jpeg"
import imgSkiing from "../../assets/skiing.jpeg"
import imgZiplines from "../../assets/ziplines.jpeg"

import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';



import Aos from "aos"
import "aos/dist/aos.css"

import { Splide, SplideSlide } from '@splidejs/react-splide';









export default function Offers(){

    React.useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="offers " >

            <div className="secContainer">
                <div data-aos = "fade-up" data-aos-duration = "2000" className="secIntro">
                    <h1 className="secTitle">
                        Ready for an active holiday?
                    </h1>
                    <p>
                    Explore the land of culture = love of the outdoors. Take part in countless activities in stunning nature all over the country.
                    </p>
                </div>
                
                <img src="https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,g_xy_center,h_700,q_64,w_1400,x_1000,y_500/v1/clients/norway/hiking_higravtindan_lofoten_northern_norway_photo_kristin_folsland_olsen_visitnorway_com_2_1_73dd9780-276f-40f4-a48c-b00b6cca876f.jpg" alt="" />
                
                <h1 className="out">Outdoor activities</h1>
                <Splide aria-label="My Favorite Images"
                options={ {
                    rewind: true,
                    perPage: 3,
                    gap:"2rem",
                  } }
                >
                    <SplideSlide>
                        <img src={imgHiking} alt="Image 1"/>
                        <h1>Hiking</h1>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={imgBiking} alt="Image 2"/>
                        <h1>Mountain biking</h1>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={imgZiplines} alt="Image 2"/>
                        <h1>Ziplines</h1>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={imgCycling} alt="Image 2"/>
                        <h1>Cycling</h1>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={imgRiver} alt="Image 2"/>
                        <h1>Fun on the river</h1>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={imgSkiing} alt="Image 2"/>
                        <h1>Skiing</h1>
                    </SplideSlide>
                </Splide>
                
            </div>
        </section>
    )
}