import React from 'react'
import "../Section5/Section5.css"
import Teamet1 from "../../../../Assets/team1.png"
import Teamet2 from "../../../../Assets/team2.png"
import Teamet3 from "../../../../Assets/team3.png"

// import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoDribbble } from "react-icons/io5";

const Section5 = () => {
  return (
    <>
    
    <div className="my-team">

<div className="my-team-section-parts">

<div className="my-team-section-part1-title">
    <h5>MEET THE TEAM</h5>
</div>


<div className="my-team-section-part2-images">
<div className="img-transparency">
<img src={Teamet1} alt="" />
</div>

<div className="icons">
<IoIosArrowForward />
</div>
<img src={Teamet2} alt="" />

<div className="icons">
<IoIosArrowBack />
</div>

<div className="img-transparency">
<img src={Teamet3} alt="" />
</div>
</div>



<div className="description">
    <h3>Irina Bykova</h3>
    <div className="p-div">
    <p>Photographer with a recognizable style focused </p>
    <p> on the details. Excellent understanding and feels ofthe </p>
    <p> concept of any project</p>
    </div>

    <div className="icon-devs">
        <div className="icon-devs1"> <TiSocialFacebook /></div>
   
        <div className="icon-devs2"> <FaTwitter /></div>
 
        <div className="icon-devs3"> <IoLogoDribbble /></div>
    </div>
</div>






</div>










    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Section5