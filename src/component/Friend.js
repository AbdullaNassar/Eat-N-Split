import { useState } from "react";
import "./Friend.css"
import SplitBill from "./SplitBill";
function Friend({name,image,status}){
    const[des,setDes]=useState(status);
    const[displaySplitBill, setDisplaySplitBill]=useState(false);
    function changeStatusHandler(data){
        if(data.diffrence===0)return;
        if(data.whoPay===true){
            setDes(`You owe ${name} $${data.diffrence}`);
        }
        else {
            setDes(`${name} owes you $${data.diffrence}`);
            setDisplaySplitBill((e)=>!e);
        }
    }

    return(
      <div>
        <div className="friend-container">
            <div className="img-container"><img src={image} alt="image"/></div>
            <div className="friend-info">
            <h4>{name}</h4>
            <p>{des}</p>
            </div>
            <button onClick={e=>{
                setDisplaySplitBill(prev=>!prev);
            }} className="btn">{displaySplitBill?"Close":"Select"}</button>
        </div>
        {displaySplitBill&&<SplitBill onSubmit={changeStatusHandler} name={name}/>}

      </div>
    );
}

export default Friend;