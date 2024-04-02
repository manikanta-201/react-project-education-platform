import React from "react";
import "../Section3/Section3.css";

import mack from "../../../../Assets/mack1.png";
import iphone from "../../../../Assets/iphone.png"
const Section3 = () => {
  return (
    <>
      <div className="Websites1">
        <div className="Websites2">

          <div className="Websites2-divs">
            <div className="mack-img">
              <img src={mack} alt="" />
            </div>

            <div className="mack-content">
              <h3>UI/UX</h3>
              <p>
                Who says airline websites are too complex to be responsive? The
                Work & Co technology team built a site that works wherever you
                are, so you have a great experience at any point of your trip,
                from a laptop to a mobile device.
              </p>

              <button>VIEW PROJECT</button>
            </div>

          </div>




          <div className="Websites2-divs">
            

            <div className="mack-content">
              <h3>APPS</h3>
              <p>
              Ink UI Kit has truly made my life easier. I have so much more time and feel such a sense of relief when I finally come home and everything is already done.
              </p>

              <button>VIEW PROJECT</button>
            </div>


            <div className="mack-img">
              <img src={iphone} alt="" />
            </div>

          </div>











          
        </div>
      </div>
    </>
  );
};

export default Section3;
