
import { colors } from "@mui/material";
import React from "react";

export const Upcomings =() =>{
    const evestyle = {

        margin : "6px",
        height : "6.8rem",
        padding : "4px",
        display : "flex",
        justifyContent : "space-between",
        backgroundColor : "#403b4d",
        borderRadius : "8px"
        
    }
    
    

    const upstyles = {border : "10px", borderColor : "red",}
    return (
    <>
    <div className="uplists" style={upstyles}>
        <ol style={{listStyle : "none"}}>
            <li><div className="events" style={evestyle}>
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" style={{width : "10%" , height : "90%", borderRadius : "4px"}}/>
            <p style={{width : "100%", margin : "8px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit optio temporibus doloremque iusto unde facilis, vitae eos sapiente adipisci aperiam eum debitis dolores expedita! Excepturi voluptate recusandae tempore nam.</p>
            </div></li>

            <li><div className="events" style={evestyle}>
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" style={{width : "10%" , height : "90%" , borderRadius : "2px"}} />
            <p style={{width : "100%", margin : "8px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit optio temporibus doloremque iusto unde facilis, vitae eos sapiente adipisci aperiam eum debitis dolores expedita! Excepturi voluptate recusandae tempore nam.</p>
            </div></li>

            <li><div className="events" style={evestyle}>
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" style={{width : "10%" , height : "90%" , borderRadius : "2px"}} />
            <p style={{width : "100%", margin : "8px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit optio temporibus doloremque iusto unde facilis, vitae eos sapiente adipisci aperiam eum debitis dolores expedita! Excepturi voluptate recusandae tempore nam.</p>
            </div></li>
        </ol>
    </div>
    </>)


}
