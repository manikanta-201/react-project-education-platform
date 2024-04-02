import React from "react";
import "./Home.css";
import HomeImage from "../../Assets/Overlay-2.png";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4  from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5"
import Section6 from "./Components/Section6/Section6"
import  Section7  from "./Components/Section7/Section7"
const Home = () => {
  return (
    <>
      <div className="homepage">
        <img src={HomeImage} alt="" className="img-background" />
      </div>
      <div className="hr">
        <Navbar />
        <Hero />
      </div>
      <div className="sections">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5/>
        <Section6/>
        < Section7 />




      </div>
    </>
  );
};

export default Home;
