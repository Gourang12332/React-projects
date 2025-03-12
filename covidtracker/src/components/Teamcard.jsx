import React from "react";
import "./Teamcard.css"
export const Teamcard = (props) =>{
return (
    <>
    <div className="cards">
       <div className="left">
           <p>{props.para}</p>
       </div>
       <div className="right">
        <img style={{objectFit : "cover"}} src={props.imgsrc} alt="" />
       </div>
    </div>
    </>
)
}