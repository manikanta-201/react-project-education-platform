import React from 'react'
import "../Hero/Hero.css"
import  buttonimg from "../../../../Assets/Button.png"


const Hero = () => {
  return (
   <>
   
   <div className="herosection">
        <div className="container">
          <img src={buttonimg} className="buttonimg" />
          <div className="headingtag">
            <h1>Hi! We’re the Studio!</h1>
          </div>
          <div className="ptag">
            <p>We are studio and we are Great. And Simple. And Studio. </p>
            <p>Yo! Wath the showreel.</p>
          </div>
        </div>

        <div className="bottom-cards">
          <div className="card1">
            <h4>GIMME ALL YOUR LOVE</h4>
            <p>A set of 130 elements, perfectly </p>
            <p>fitting each other.</p>
          </div>



          <div className="card1">
            <h4>GIMME ALL YOUR LOVE</h4>
            <p>A set of 130 elements, perfectly </p>
            <p>fitting each other.</p>
          </div>




          <div className="card1">
            <h4>GIMME ALL YOUR LOVE</h4>
            <p>A set of 130 elements, perfectly </p>
            <p>fitting each other.</p>
          </div>





        </div>
      </div>
   
   </>
  )
}

export default Hero