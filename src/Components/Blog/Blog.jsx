import React from "react"
import { BsArrowRightShort } from "react-icons/bs"
import "./blog.css"
import img from "../../assets/pexels-moussa-idrissi-3581916.jpg"
import img1 from "../../../public/paris-Stocksy_txpec9779cdoQS300_Medium_4105294-rfc.avif"
import img2 from "../../../public//img2.avif"
import Aos from "aos"
import "aos/dist/aos.css"








export default function Blog(){

    React.useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])


    return(
        <section className="blog">
            <div className="secContainer">
                <div className="Intro">
                    <p data-aos = "fade-right" data-aos-duration = "2500">
                        TRAVEL STORIES AND NEWS
                    </p>

                    <h1 data-aos = "fade-right" data-aos-duration = "2000" className="secTitle">
                        Explore our latest <br /> stories
                    </h1>
                </div>

                <div className="mainContainer ">
                    <div className="blogs">
                                    <div className="mainPost">
                                        <img src={img1} alt="" />
                                        <div className="postInfo">
                                            <a href="">How to get around morocco</a>
                                            <h4>May 19,2023 . 12 min read</h4>
                                            <p>From bike to bus and train to plane, here's everything you need to know about getting around in morocco.</p>
                                        </div>
                                    </div>
                                    <div className="secPosts">
                                        <div className="post1">
                                            <img src={img2} alt="" />
                                            <a href="">The top 7 road trips in Morocco</a>
                                            <h4>May 18, 2023 • 6 min read</h4>
                                            <p>Hidden towns and rolling vineyards – morocco has it all on offer on a road trip. Explore this stunning country behind the wheel with our pick of the best.</p>
                                        </div>
                                        <div className="post1">
                                            <img src={img} alt="" />
                                            <a href="">The top 7 road trips in Morocco</a>
                                            <h4>May 18, 2023 • 6 min read</h4>
                                            <p>Hidden towns and rolling vineyards – Morocco has it all on offer on a road trip. Explore this stunning country behind the wheel with our pick of the best.</p>
                                        </div>
                                    </div>
                                </div>
                </div>

            </div>
        </section>
    )
}