import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import {BsArrowUpRight} from "react-icons/bs"


function Navbar() {

    const [active, setActive] = React.useState("navBar")
    const showNav = () => {
        setActive("navBar activeNavbar")
    }
    const removeNav = () => {
        setActive("navBar")
    }

    const [Change,setChange] = React.useState("header")
    const addBg = () => {
        if(window.scrollY >= 10){
            setChange("header activeHeader")
        }
        else{
            setChange("header")
        }
    }
    window.addEventListener("scroll", addBg)
  return (
    <div>
      <section className="navBarSection">
            <div className={Change}>
                <div className="logoDiv">
                    <a href="" className="logo">
                        <h1 className="flex"><BsArrowUpRight className="icon"/>Go Travel</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Products</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Resources</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Blog</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="#">Login</a>
                            </button>
                            <button className="signBtn">
                                <a href="#">Sign Up</a>
                            </button>
                        </div>
                    </ul>
                    <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className= "icon"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Navbar
