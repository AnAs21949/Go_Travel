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
    <section className="Questions">
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
              Some popular tourist attractions in the area include [attraction 1], [attraction 2], and [attraction 3]. These attractions offer unique experiences and are highly recommended for visitors.
            </p>
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
              The city offers various transportation options for getting around. You can use public buses, taxis, or ride-sharing services like Uber or Lyft. Additionally, there are bike-sharing programs and pedestrian-friendly areas, making it easy to explore the city on foot or by bicycle.
            </p>
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
              Yes, there are several local restaurants known for their delicious cuisine. Some highly recommended options include [restaurant 1], known for its [specialty dish], [restaurant 2], famous for its [specialty dish], and [restaurant 3], which offers a wide range of [local cuisine]. Don't miss the opportunity to try these culinary delights!
            </p>
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
              The best time to visit for favorable weather is typically during [season 1] or [season 2]. During these seasons, the weather is generally pleasant with mild temperatures and minimal rainfall. It's a great time to explore outdoor attractions and enjoy various outdoor activities.
            </p>
          )}
        </div>
      </div>
      <button className="more-info">More Info</button>
    </section>
  );
}

export default Questions;
