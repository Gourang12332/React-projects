import React from "react";
import "./Card.css"
export const Card = (props)=>{
   return(
   <div className="major">
     <div className="card">
        <img src={props.imgsrc} alt="" />
        <div className="details">
          <p>A NETFLIX ORIGINAL SERIES</p>
          <span>{props.name}</span>
         <a href={props.link}>WATCH NOW</a>
        </div>
    </div>
   </div>
   )
}