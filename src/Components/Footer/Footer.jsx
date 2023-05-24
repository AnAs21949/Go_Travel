import React from "react";
import "./footer.css"
import {ImFacebook} from "react-icons/im"
import {BsArrowUpRight, BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

import Aos from "aos"
import "aos/dist/aos.css"


export default function Footer(){

    React.useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    return(
        <div className="footer">
            <div className="secContainer container grid">
                <div data-aos = "fade-up" data-aos-duration = "2000" className="logoDiv">

                    <div data-aos = "fade-up" data-aos-duration = "2000" className="footerLogo">
                        <a href="" className="logo flex">
                            <h1 className="flex"><BsArrowUpRight className="icon"/>Go Travel</h1> 
                        </a>
                    </div>

                    <div data-aos = "fade-up" data-aos-duration = "3000" className="socials flex">
                        <ImFacebook className="icon"/>
                        <BsTwitter className="icon"/>
                        <AiFillInstagram className="icon"/>
                    </div>

                </div>


                <div data-aos = "fade-up" data-aos-duration = "2000" className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href=""> Explore</a>
                    </li>
                    <li>
                        <a href="">Travel </a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </div>


                <div data-aos = "fade-up" data-aos-duration = "3000" className="footerLinks">
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href=""> Support</a>
                    </li>
                    <li>
                        <a href="">Travel & Conditions</a>
                    </li>
                    <li>
                        <a href="">privacy</a>
                    </li>
                </div>


                <div data-aos = "fade-up" data-aos-duration = "4000" className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className="phone">+121 764 099 700</span>
                    <span className="email">anamed@gmail.com</span>
                </div>


                
            </div>
        </div>
    )
}