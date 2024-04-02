import React from "react";
import "../Section7/Section7.css";

import logo from "../../../../Assets/Baikal Logo.png";

import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Section7 = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-section-parts">
          <div className="left-section">
            <div className="footer-section-log">
            <img src={logo} alt="" />
          </div>

          <div className="left-section-content">
          <p>© 2014 Baikal UI Kit </p>
          <p>All rights reserved</p>
          </div>
          </div>

          <div className="right-section">
            <div className="footer-section-part2">
            <h6>BERLIN</h6>
            <div className="footer-section-part2-content">
              <p>Oranienstraße 24, 10999</p>
              <p>+464 78 53</p>
            </div>
            <h6>SAINT P.</h6>
            <div className="footer-section-part2-content">
              <p>Oranienstraße 24, 10999</p>
              <p>+464 78 53</p>
            </div>
          </div>

          <div className="footer-section-part2">
            <h6>FOLLOW US</h6>
            <div className="footer-section-part2-content-icons">
              <RiFacebookCircleLine className="i-cons" /> <p>Facebook</p>
            </div>

            <div className="footer-section-part2-content-icons">
              <AiFillTwitterCircle className="i-cons" /> <p>Twitter</p>
            </div>

            <div className="footer-section-part2-content-icons">
              <BiLogoInstagramAlt className="i-cons" /> <p>Instagram</p>
            </div>
          </div>

          <div className="footer-section-part2">
            <h6>ABOUT US</h6>
            <div className="footer-section-part2-content">
              <p>
                Russian expansion into the Buryat area around Lake Baikal in
                1628–1658 was part of the Russian conquest of Siberia. A rover
                wearing a fuzzy suit doesn’t alarm the real penguins
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
