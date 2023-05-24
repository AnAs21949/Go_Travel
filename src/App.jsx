import React from 'react'
import './App.css'

import Nav from './Components/NavBar/Navbar' 
import Home from './Components/Home/Home' 
import Popular from './Components/popular/Popular' 
import Offers from './Components/Offers/Offers' 
import About from './Components/About/About' 
import Footer from './Components/Footer/Footer' 
import Blog from './Components/Blog/Blog' 
import Contact from './Components/ContactForm/Contact'
import Questions from './Components/Questions/question'
// import Log from "./Components/Log/Login"

export default function App() {
  return (
    <div>
      {/* <Log /> */}
      <Nav />
      <Home />
      <Popular />
      <Offers />
      <About />
      <Blog />
      <Questions />
      <Contact />
      <Footer />
    </div>
  )
}


