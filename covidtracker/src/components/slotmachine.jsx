import React, { useEffect, useState } from "react";
import "./slotmx.css"

export const Slotmx = () =>{
    const [got,setGot] = useState("");
    const [first,setFirst] = useState("");
    const [second,setSecond] = useState("");
    const [third,setThird] = useState("");
    let [time,setTime] = useState("");
    const a = ["Gourang","Amit","Ambani","mukesh","rautela","vedik","Yug"]

    
    const Handlescroll = ()=>{
        const idx = Math.floor(Math.random()*10);
        if(idx<7){
            setGot(a[idx]);
        } else{ 
            setGot(a[6]);
        }

       
    }
    // useEffect(()=>{
    //     if(first === ""){
    //         setFirst(got);
    //        }
    //        else if(second === ""){
    //            setSecond(got);
    //        }
    //        else{
    //            setThird(got);
    //        }
    // if(first !== "" && second !== "" && third !== ""){
    //     chkresult();
    // }
    // },[first,second,third,got])
/*........................................ Time Task ...................................*/
    // const HandleTime = ()=>{
    //  setTime(new Date(). toTimeString()); // new Date() is a constructor which creates new date object
    // }
    // useEffect(()=>{
    //     setTime(new Date(). toTimeString());
    // },[]);

    // time = new Date(). toTimeString(); -----> THis can directly be used instead of useeffect
/*........................................ Time Task ...................................*/    

/*............................................... DIGITAL CLOCK................................... */
//    const UpdateTime = () =>{
//     setTime(new Date().toLocaleTimeString());
//    }
//    setInterval(UpdateTime,1000);   // if a function will be called as updateTime(), in this setInterval or useeffect causes an error of too renders; remember
  /*............................................... DIGITAL CLOCK................................... */  

    return(
        <>
        <div className="scroller">
            <div className="up"><p>Scroll it out</p></div>
            <hr />
            <div className="mid"><p>{time}</p></div>
            <hr />
            <div className="down">
                <button className="downstr" onClick={Handlescroll}>click here</button>
            </div>
        </div>
        </>
    )
}