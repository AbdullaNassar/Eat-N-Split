function AddFriend(){
    return(
    <div className='Add Friend'>
        <button>Add Friend</button>
        <div>
            <label>💕 Friend Name</label>
            <input type='text'/>
        </div>
        <div>
            <label>✨ Image URL </label>
            <input/>
        </div>
        <button>Add</button>
        <button>Close</button>
    </div>
    )
}
export default AddFriend;