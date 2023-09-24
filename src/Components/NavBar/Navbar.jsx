import React from 'react'
import "./nav.css"
import {BsArrowUpRight} from "react-icons/bs"
import { useState } from 'react'


function Navbar() {
    const [change,setChange] = useState("header")
    

    const addBg = () => {
        if(window.scrollY >= 10){
            setChange("header activeHeader")
        }
        else{
            setChange("header")
        }
    }
    window.addEventListener("scroll", addBg)


    function scrollPage(anchor) {
        const id =`${anchor}-section`
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        }
    }


  return (
    <section className="navBarSection">
        <div className={change}>
            <div className="logoDiv">
                <a href="" className="logo">
                    <h1 className="flex"><BsArrowUpRight className="icon"/>Go Travel</h1>
                </a>
            </div>

            <button className="signBtn" onClick={() => scrollPage("offers")}  id='offers'>
                Offers
            </button>

        </div>
    </section>
  )
}

export default Navbar
