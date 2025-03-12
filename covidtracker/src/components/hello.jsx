/* This code snippet is a React component named `Hello` that displays a greeting message based on the
current time of the day. Here's a breakdown of what the code does: */
import React, { useEffect, useState } from "react"

export const Hello = () =>{
    let [greeting,setgreeting] = useState("goodu ji");
    // Date() year,month ,day ,hours, minute, seconds
    let hour = new Date().getHours() // integer type
    let [color,setcolor] = useState("red");
    
    useEffect(() =>{
            if(hour>=1 && hour<=11){
            setgreeting("Good Morning");
            setcolor("green");
       } else if(hour>=12 && hour <19){
        setgreeting("Good Afternoon")
        setcolor("orange")
       } else {
        setgreeting("Good Night")
         setcolor("black")
       }
        
    },[hour])
    // use effect will run when the value of hours changes
    const greet = {
        display : "flex",
        fontSize : "80px",
        width : "900px",
        height :"150px",
        backgroundColor:"#cee5f2",
        margin : "auto",
        marginTop : "200px",
        justifyContent:"space-evenly",
        borderRadius: "10px",
        color : "white"
    }
    return(
        <>
        <body>
        <div className="greetings" style={greet} >
        <p style={{color:"blue",borderRadius :"10px",width:"500px",textAlign:"center"}}>Hello Sir</p>
        <hr style={{verticalAlign:"1px"}} />
        <p style={{color: color,width:"100%" ,borderRadius :"10px",textAlign:"center"}}>{`${greeting}`}</p>
        </div>   
        </body>
        
        </>
    )
}
