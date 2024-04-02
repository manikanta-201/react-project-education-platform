import React from "react";
import "../Section2/Section2.css";
import logo1 from "../../../../Assets/Logo1.png";
import logo2 from "../../../../Assets/Logo2.png"

import logo3 from "../../../../Assets/Logo3.png"
import logo4 from "../../../../Assets/Logo4.png"
import logo5 from "../../../../Assets/Logo5.png"
import logo6 from "../../../../Assets/Logo6.png"
const Section2 = () => {
  return (
    <>
      <div className="section2-content">
        <div className="section2-content2">
          <div className="heading">PROUD TO WORK WITH</div>

          <div className="images">
            <img src={logo1} alt="" />
            <img src={ logo2 }alt="" />
            <img src={logo3} alt="" />
            <img src={logo4}alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
          </div>    
        </div>
      </div>
    </>
  );
};

export default Section2;
