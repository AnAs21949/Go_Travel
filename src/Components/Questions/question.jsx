import React, { useState } from 'react';
import "./que.css"


function Questions() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);

  const toggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const toggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };

  const toggleAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  };

  const toggleAnswer4 = () => {
    setShowAnswer4(!showAnswer4);
  };

  return (
    <section className="Questions" >
      <div className="header">
        <p className="q-title">Frequently Asked Questions</p>
        <p className="q-motivation">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="q-hero">
        <div className="qst">
          <div className="first-part">
            <p className="q-name">What are some popular tourist attractions in the area?</p>
            <div className="icons">
              <button className="show-icon-btn s-1" onClick={toggleAnswer1}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path fill="none" stroke="#5267DF" strokeWidth={3} d="M1 1l8 8 8-8" />
                </svg>
              </button>
              <button className="hide-icon-btn h-1" onClick={toggleAnswer1}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path
                    fill="none"
                    stroke="hsl(0, 94%, 66%)"
                    strokeWidth={3}
                    d="m1 10 9-9 9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
          {showAnswer1 && (
            <p className="seconde-part a-1">
                  Morocco offers a range of captivating tourist attractions. Explore the vastness of the Sahara Desert, wander through the bustling souks of Marrakech's Medina, discover the enchanting blue streets of Chefchaouen's Blue City, and embark on an unforgettable adventure in the stunning Atlas Mountains.            </p>
          )}
        </div>
        <div className="qst">
          <div className="first-part">
            <p className="q-name"> How can I get around the city?</p>
            <div className="icons">
              <button className="show-icon-btn s-2" onClick={toggleAnswer2}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path fill="none" stroke="#5267DF" strokeWidth={3} d="M1 1l8 8 8-8" />
                </svg>
              </button>
              <button className="hide-icon-btn h-2" onClick={toggleAnswer2}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path
                    fill="none"
                    stroke="hsl(0, 94%, 66%)"
                    strokeWidth={3}
                    d="m1 10 9-9 9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
          {showAnswer2 && (
            <p className="seconde-part a-2">
                Getting around Moroccan cities is convenient and diverse. Use the efficient public transportation systems, including buses and trains, which connect major cities and towns. Taxis are readily available for shorter distances, and walking is a great way to explore the narrow streets of the medinas and immerse yourself in the local culture.            </p>
          )}
        </div>
        <div className="qst">
          <div className="first-part">
            <p className="q-name">Are there any recommended local restaurants or food specialties?</p>
            <div className="icons">
              <button className="show-icon-btn s-3" onClick={toggleAnswer3}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path fill="none" stroke="#5267DF" strokeWidth={3} d="M1 1l8 8 8-8" />
                </svg>
              </button>
              <button className="hide-icon-btn h-3" onClick={toggleAnswer3}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path
                    fill="none"
                    stroke="hsl(0, 94%, 66%)"
                    strokeWidth={3}
                    d="m1 10 9-9 9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
          {showAnswer3 && (
            <p className="seconde-part a-3">
              Morocco boasts a rich culinary heritage. Indulge in traditional Moroccan dishes such as fragrant tagines, flavorful couscous, and refreshing mint tea. For an authentic dining experience, visit renowned restaurants like "Le Jardin" in Marrakech, known for its beautiful garden setting and delectable Moroccan cuisine, or "Café Clock" in Fez, offering a fusion of Moroccan and international flavors.            </p>
          )}
        </div>
        <div className="qst">
          <div className="first-part">
            <p className="q-name"> What are the best times to visit for favorable weather?</p>
            <div className="icons">
              <button className="show-icon-btn s-4" onClick={toggleAnswer4}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path fill="none" stroke="#5267DF" strokeWidth={3} d="M1 1l8 8 8-8" />
                </svg>
              </button>
              <button className="hide-icon-btn h-4" onClick={toggleAnswer4}>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={12}>
                  <path
                    fill="none"
                    stroke="hsl(0, 94%, 66%)"
                    strokeWidth={3}
                    d="m1 10 9-9 9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
          {showAnswer4 && (
            <p className="seconde-part a-4">
To experience favorable weather conditions, plan your visit to Morocco during the spring (March to May) and autumn (September to November). During these seasons, temperatures are pleasant, and you can enjoy mild days for exploring the cities and cooler evenings for a comfortable stay.           </p>
          )}
        </div>
      </div>
      <button className="more-info">More Info</button>
    </section>
  );
}

export default Questions;
