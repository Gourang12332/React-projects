import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
export const Incrementer = ()=>{
    const [count,SetCount] = useState(0);
    const Increment = ()=>{
        SetCount(count+1);
    }
    const Decrement = ()=>{
        if(count == 0){
            alert("You have reached the lower limit of 0")
        } else{
        SetCount(count-1);
        }
    }
    return(
        <div className="main_div">
            <div className="counter">{count}</div>
            <Button className="increm" onClick={Increment}><AddIcon></AddIcon></Button>
            <Tooltip title = "Decrementer"><Button className="decrem" onClick={Decrement}><RemoveIcon></RemoveIcon></Button></Tooltip>
            <AccessAlarmIcon></AccessAlarmIcon>
        </div>
    )
}