import React, { useState } from "react";

 export const Dolist = ()=>{
    const [InputItem , SetInputItem] = useState();
    const [Items, SetItems] = useState([]);

    const HandleInput = (e)=>{
     SetInputItem(e.target.value);
    }
     const AddItems = ()=>{
     SetItems((olditems)=>{
        return(
            [...olditems,InputItem]
        )
     })
      SetInputItem("");
     }
     const RemoveItem =(id)=>{
        SetItems((olditems) =>{
         return olditems.filter((val,idx)=>{
            return idx !== id;
         })
        })
     }

return(
    <>
      <div className="main_div">
    <h1>To DO list</h1>
    <div className="itemlist">
        <input type="text" value={InputItem} placeholder="Add items" onChange={HandleInput}/>
        <button className="add" onClick={AddItems}>+</button>
        {Items.map(
            (val,idx)=>{
            return(
                <li> <button className="remove" onClick={()=>{
                    RemoveItem(idx);
                 }}>X</button> {val}</li>
            )
            }
        )}
    </div>
  </div>
  </>
)
}