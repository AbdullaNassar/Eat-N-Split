import { useState } from "react";
import "./SplitBill.css"
function SplitBill({name,onSubmit}){
  const[bill, setBill]=useState(null);
  const[myExpense,setMyExpense]=useState();
  const[iPay, setIpay]=useState(true);
  const[isShow,setIsShow]=useState(true);
  let friendExpense;
   if(bill!==null)friendExpense=bill-myExpense;
  let amount;
  if(iPay)amount=friendExpense;
  else amount=myExpense;
  
  function changeBillHandler(e){
    setBill(+e.target.value);
  }

  function changeMyexpenseHandler(e){
    setMyExpense(+e.target.value);
  }

  function onSubmitSplitt(e){
    e.preventDefault();
    // console.log(`${bill} ${myExpense}`);
    if(!bill){
      alert("please enter bill amount 😍");
    }
    else {
      const data={
        whoPay:iPay,
        diffrence: amount
      }
      console.log(data);
      setIsShow(false);
      onSubmit(data);
      
    }
  }

  function changePayHandler(e){
    console.log(e.target.value);
    setIpay(e=>!e);
  }
    return(
        isShow&&<div className="split-container">
      <h3>Split A Bill With {name}</h3>
      <div className="input">
        <label>Bill Value</label>
        <input className="input-size" value={bill} onChange={changeBillHandler} type="number" min={1} step={1} />
      </div>
      <div className="input">
        <label>Your Expense</label>
        <input className="input-size" value={myExpense} onChange={changeMyexpenseHandler} type="number" min={1} step={1} max={bill}/>
      </div>
      <div className="input">
        <label>{name}'s Expense   </label>
        <input className="input-size" disabled value={friendExpense}/>
      </div>
      <div className="input">
        <label>Who is paying the bil</label>
        <select className="input-size" onChange={changePayHandler}>
          <option value="my">You</option>
          <option value="friend">{name}</option>
        </select>
      </div>
      <div className="btn-cont"><button className="btn" type="submit" onClick={onSubmitSplitt}>Split bill</button></div>
    </div>
    )
}
export default SplitBill;