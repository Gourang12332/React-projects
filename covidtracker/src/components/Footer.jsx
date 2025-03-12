import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { display, margin, width } from "@mui/system";
export const Footer = () =>{
    const foot  = {
        display : "flex",
        alignItem : "center",
        marginLeft : "600px",
        flexDirection : "column",
    }
    const topping = {
        display : "flex",
        width : "20px",
        justifyContent : "space-between",
        
    }
return (
    <>
     <div className="footer" style={foot}>
        <div className="top" style={topping}>
        <InstagramIcon style={{color : "white"}}></InstagramIcon>
        <FacebookIcon style={{color : "white"}}></FacebookIcon>
        <LinkedInIcon style={{color : "white"}}></LinkedInIcon>
        </div>
        <div className="down"><p>2024 CACS. ALL RIGHTS RESERVED</p></div>
     </div>
    </>
)
}