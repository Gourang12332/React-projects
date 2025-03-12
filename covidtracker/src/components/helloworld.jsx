import React, { useEffect, useState } from "react";

export const World = () =>{
    let [naam, setNaam] = useState({
       fname : "",
       lname : "", 
    });
   
    const HandleInput = (e)=>{
        const nm = e.target.name;
        const Value = e.target.value;
        
        setNaam((preValue) =>{
            if(nm == "fname"){
              return{
                fname : Value,
                lname : preValue.lname,
              }
            } else if(nm == "lname"){
                return{
                  fname : preValue.fname,
                  lname : Value,
                }
              }
        })
    }
    
    const HandleSubmit = (e)=>{
     e.preventDefault();
    }
  return(
    <form action="">
     <h1>Hello {naam.fname}{naam.lname}</h1>
   <input type="text" name="fname" onChange={HandleInput} placeholder="Write your name pls"></input>
   <input type="text" name="lname" onChange={HandleInput} placeholder="Write your password pls"></input>
   <button onClick={HandleSubmit}>Submit</button>
   </form>
  )
}