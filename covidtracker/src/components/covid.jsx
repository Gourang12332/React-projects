import React, { useEffect, useState } from "react";
import "./covid.css"
export const Covid = () =>{
    const [coviddata,setcoviddata] = useState([])
 const getcoviddata = async () =>{
   try {
    const res = await fetch(`https://data.covid19india.org/data.json`)
    console.log(res);
    const data = await res.json();
    console.log(data.cases_time_series[0]);
    setcoviddata(data.cases_time_series[0])
   } catch (error) {
    console.log(error);
   }
 }
 useEffect(() =>{
 getcoviddata();
 },[])
 return <>
  <h1>Hi this is Gourang</h1>
  <div className="coviddata" >
  {coviddata.dailyconfirmed} <br />
  {coviddata.dailydeceased}  <br />
  {coviddata.dailyrecovered}<br />
  {coviddata.date}<br />
  {coviddata.dateymd}<br />
  {coviddata.totalconfirmed}<br />
  {coviddata.totaldeceased}
  </div>
 </>
}

export default Covid ;
