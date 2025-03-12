import React from "react";
import Cacscarous from "../components/Cacscarous";
import { Upcomings } from "../components/Upcomings";
import { Footer } from "../components/Footer";
import './Home.css'
export const Home = () => {
return(
<>
<main>
<section className="intro">CACS</section>
<section className="navbar"></section>
<section className="herosection">
 <div className="welcome">
    <div className="left">
      <Cacscarous></Cacscarous>
    </div>
    <div className="right">
      <p className="head" style={{fontWeight : "bolder", fontSize : "50px"}}>Welcome to CACS</p>
      <p className="matter">

The Creative Arts and Cultural Society (CACS) fosters creativity and cultural expression within the community. It provides a platform for students to explore diverse art forms, cultural traditions, and creative endeavors through events, workshops, and performances, encouraging collaboration and personal growth. CACS celebrates the richness of creativity and culture, bringing together passionate individuals to share and showcase their talents.
      </p>
    </div>
 </div>
 <div className="events">
  <div className="head" style={{boxSizing : "border-box",padding : ""} }><p style={{fontSize : "xx-large" , fontWeight : "bold"}}>Upcoming Events</p></div>
  <div className="boxlist">
    <Upcomings></Upcomings>
  </div>
 </div>

 <div className="team">
  <div className="head" style={{boxSizing : "border-box",padding : ""} }><p style={{fontSize : "xx-large" , fontWeight : "bold"}}>Team</p></div>
  <div className="boxlist">
    <Upcomings></Upcomings>
  </div>
 </div>

 <div className="clubs">
  <div className="head" style={{boxSizing : "border-box",padding : ""} }><p style={{fontSize : "xx-large" , fontWeight : "bold"}}>Our Clubs</p></div>
  <div className="boxlist">
    <Upcomings></Upcomings>
  </div>
 </div>

 <div className="Collaborators">
  <div className="head" style={{boxSizing : "border-box",padding : ""} }><p style={{fontSize : "xx-large" , fontWeight : "bold"}}>Collaborators</p></div>
  <div className="boxlist">
    <Upcomings></Upcomings>
  </div>
 </div>

<div className="footer">
  <Footer></Footer>
</div>
</section>
</main>
</>
)
}