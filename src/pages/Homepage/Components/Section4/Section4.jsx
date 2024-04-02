import React from "react";
import "../Section4/Section4.css";
import photo1 from "../../../../Assets/pot1.png";
import photo2 from "../../../../Assets/pot2.png";
import photo3 from "../../../../Assets/pot3.png";
import photo4 from "../../../../Assets/pot4.png";
import photo5 from "../../../../Assets/pot5.png";
import photo6 from "../../../../Assets/pot6.png";
import photo7 from "../../../../Assets/pot7.png";
import photo8 from "../../../../Assets/pot8.png";









const Section4 = () => {
  return (
    <>
      <div className="myportfolio">
        <div className="myportfolio-section">
          <div className="myportfolio-section-title">
            <p>PORTFOLIO</p>
            <h3>Recent Works</h3>
          </div>
          <div className="myportfolio-section-photos">
            <div className="myportfolio-section-photos-card1">
              <img src={photo1} alt="" />
              <h5>INK UI KIT</h5>
              <p>Web Design, UX</p>
            </div>
            <div className="myportfolio-section-photos-card1">
              <img src={photo2} alt="" />
              <h5>MONOBRAND UI</h5>
              <p>UI/UX, Illustration</p>
            </div>

            <div className="myportfolio-section-photos-card1">
              <img src={photo3} alt="" />
              <h5>BAIKAL IOS</h5>
              <p>Wireframing, UX</p>
            </div>

            <div className="myportfolio-section-photos-card1">
              <img src={photo4} alt="" />
              <h5>BAIKAL STARTUP</h5>
              <p>Typography, Web Design</p>
            </div>
          </div>




          <div className="myportfolio-section-photos">
            <div className="myportfolio-section-photos-card1">
              <img src={photo5} alt="" />
              <h5>INK LONGREAD</h5>
              <p>UI/UX, Typography</p>
            </div>
            <div className="myportfolio-section-photos-card1">
              <img src={photo6} alt="" />
              <h5>BASEMENT WF</h5>
              <p>Wireframing, UX</p>
            </div>

            <div className="myportfolio-section-photos-card1">
              <img src={photo7} alt="" />
              <h5>BASEMENT MOBILE</h5>
              <p>Web Design, UX</p>
            </div>

            <div className="myportfolio-section-photos-card1">
              <img src={photo2} alt="" />
              <h5>BASEMENT MOBILE</h5>
              <p>Web Design, UX</p>
            </div>
          </div>

















        </div>
      </div>
    </>
  );
};

export default Section4;
