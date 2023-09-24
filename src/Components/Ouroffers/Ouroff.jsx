import React from 'react'
import "./off.css"
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


import img1 from "../../assets/offre1/Capture.jpg"
import img2 from "../../assets/offre1/Capture2.jpg"
import img3 from "../../assets/offre1/Capture3.jpg"
import img4 from "../../assets/offre1/Capture4 (1).jpg"
import img5 from "../../assets/offre1/Capture5.jpg"
import img6 from "../../assets/offre1/Capture6.jpg"

import img21 from "../../assets/offre2/Capture1.png"
import img22 from "../../assets/offre2/Capture2.png"
import img23 from "../../assets/offre2/Capture3.png"





import { Splide, SplideSlide } from '@splidejs/react-splide';
function Ouroff() {
  return (
    <div id='offers-section'>
        <h1 className='bigTitle'>Offers</h1>

        <h2 className='sma'>10 Days offer</h2>
      <Splide aria-label="My Favorite Images"
                options={ {
                    rewind: true,
                    perPage: 3,
                    gap:"2rem",
                  } }
                >
                    <SplideSlide>
                        <img src={img1} alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img2} alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img3} alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img4} alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img5} alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img6} alt="Image 2"/>
                    </SplideSlide>
        </Splide>
                  <br />
                  <h2 className='sma'> 6 Days offer</h2>
      <Splide aria-label="My Favorite Images"
                options={ {
                    rewind: true,
                    perPage: 3,
                    gap:"2rem",
                  } }
                >
                    <SplideSlide>
                        <img src={img21} alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img22} alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img23} alt="Image 2"/>
                    </SplideSlide>
                    
        </Splide>
    </div>
  )
}

export default Ouroff
