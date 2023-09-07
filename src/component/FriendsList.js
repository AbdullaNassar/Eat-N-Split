import { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import "./FriendList.css"
const InitialList=[
    {id:1 ,name:"Clark", status:"You and clark are even", have:0, image:"https://picsum.photos/200"},
    {id:2, name:"Sarah", status:"You and Sarah are even", have:0, image:"https://picsum.photos/200"},
    {id:3, name:"Antony", status:"You and Antony are even", have:0, image:"https://picsum.photos/200"},
];
function FriendsList(){
    const[friendList, setFriendList]=useState(InitialList);
    function addFriendHandler(newFriend){
        console.log(newFriend);
        // setFriendList(cur=>[...cur, newFriend]);
        setFriendList((prevItems) => [...prevItems, newFriend]);
    }
    return(
        <div className='friends-list'>
            {friendList.map(friend=>{
                return <Friend  key={friend.id} name={friend.name} status={friend.status} image={friend.image}/>
            })}
            <AddFriend onAdd={addFriendHandler}/>
        </div>
    );
}

export default FriendsList;