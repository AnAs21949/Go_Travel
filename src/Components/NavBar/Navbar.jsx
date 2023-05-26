import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"
import {BsArrowUpRight} from "react-icons/bs"
import "./nav.css"


function Navbar() {

    const [active, setActive] = React.useState("navBar")
    const showNav = () => {
        setActive("navBar activeNavbar")
    }
    const removeNav = () => {
        setActive("navBar")
    }

    const [Change,setChange] = React.useState("header")
    const [Sign, setSign] = React.useState("signBtn")
    const addBg = () => {
        if(window.scrollY >= 10){
            setChange("header activeHeader")
            setSign("signBtn remove")
        }
        else{
            setChange("header")
            setSign("signBtn")
        }
    }
    window.addEventListener("scroll", addBg)






    function scrollPage() {
        // Change "elementId" to the ID of the element you want to attach the click event to
        var element = document.getElementById("element");
      
        if (element) {
          element.addEventListener("click", function() {
            // Change "scrollPosition" to the desired scroll position in pixels
            var scrollPosition = 4700; // Example: scrolling to 500 pixels
            
            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth"
            });
          });
        }

      }
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
                        

                        <div className="headerBtns flex">
                            
                            <button className={Sign} onClick={scrollPage} id='element'>
                                <a href="#">Offers</a>
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
