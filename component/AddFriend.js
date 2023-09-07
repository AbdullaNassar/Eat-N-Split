import { useState } from "react";
import "./AddFriend.css"
function AddFriend({onAdd}){
    const[friendName, setFriendName]=useState('abdo');
    const[friendImage, setFriendImage]=useState('https://picsum.photos/200');
    const[isShow,setIsShow]=useState(false);
    function changeNameHandler(e){
        setFriendName(e.target.value);
        
    }
    
    function changeImageHandler(e){
        setFriendImage(e.target.value);
    }

    function clickHandler(){
        if(friendName==='')
        {
            alert("Please enter your friend name 😍");
        }
        else {
            const newFriend={
                id:Math.random(), name:friendName, status:`You and ${friendName} are even `, have:0, image:{friendImage}
            }
            onAdd(newFriend)

        }
    }

    return(
    <div className='Add-Friend'>
        {!isShow &&<button onClick={()=>{
            setIsShow(true);
        }} className="btn">Add Friend</button>}
        {isShow&&<div className="add-friend-container">
            <div className="add-friend-info">
                <label>💕 Friend Name</label>
                <input className="add-input" placeholder="your friends name..." value={friendName} onChange={changeNameHandler} type='text'/>
            </div>
            <div className="add-friend-info">
                <label>✨ Image URL </label>
                <input className="add-input" value={friendImage} onChange={changeImageHandler} type="text"/>
            </div>
            <button className="add-btn" onClick={clickHandler}>Add</button>
        </div>}
        {isShow&&<button className="btn" onClick={()=>{
            setIsShow(false);
        }}>Close</button>}
    </div>
    )
}
export default AddFriend;