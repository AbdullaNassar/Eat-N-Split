import { useState } from "react";
function SplitBill({name,onSubmit}){
  const[bill, setBill]=useState(0);
  const[myExpense,setMyExpense]=useState(0);
  const[iPay, setIpay]=useState(true);
  const[isShow,setIsShow]=useState(true);
  const friendExpense= bill-myExpense;
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
        isShow&&<div>
      <h3>Split A Bill With {name}</h3>
      <div>
        <label>Bill Value</label>
        <input value={bill} onChange={changeBillHandler} type="number" min={1} step={1} />
      </div>
      <div>
        <label>Your Expense</label>
        <input value={myExpense} onChange={changeMyexpenseHandler} type="number" min={1} step={1} max={bill}/>
      </div>
      <div>
        <label>{name}'s Expense   </label>
        <label> {bill-myExpense}</label>
      </div>
      <div>
        <label>Who is paying the bil</label>
        <select onChange={changePayHandler}>
          <option value="my">You</option>
          <option value="friend">{name}</option>
        </select>
      </div>
      <button type="submit" onClick={onSubmitSplitt}>Split bill</button>
    </div>
    )
}
export default SplitBill;