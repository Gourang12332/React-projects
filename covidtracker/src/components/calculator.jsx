import React, {useEffect,useState } from "react";

export const Calculator = () =>{
    const area = document.getElementById("ans");

    const [a,setA] = useState();
    const[b,setB] = useState();
    const [res,setres] = useState();
    const add = () =>{
        setres(parseFloat(a) + parseFloat(b)) ;
    }
    const subtract = () =>{
        setres(a-b) ;
    }
    const division = () =>{
        setres(a/b) ;
    }
    const multiply = () =>{
        setres(a*b) ;
    }

    useEffect(()=>{
        console.log(res);
   },[res]);
    
       

    const HandleA = (e) =>{
        const val = e.target.value;
        setA(val);
        area.value = "";
    }
    const HandleB = (e) =>{
        const val = e.target.value;
        setB(val); 
        area.value = "";
    }
    useEffect(()=>{
        
           },[a]);
    useEffect(()=>{
           
               },[b]);
    const Handlevalue  = ()=>{
        area.value = res;
    }
    
    return (
         <>
        <input type="number" onChange={HandleA} className="a" />
        <input type="number" onChange={HandleB} className="b" />

        <textarea name="ans" id="ans" onClick={Handlevalue} className="ans">{res}</textarea>

        <button className="nums" onClick={add} >+</button>
        <button className="nums" onClick={subtract}>-</button>
        <button className="nums" onClick={multiply}>*</button>
        <button className="nums" onClick={division}>/</button>
       
        </>
    )
}
