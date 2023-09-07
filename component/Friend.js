import "./Friend.css"
function Friend({name,image,status}){
    return(
        <div className="friend-container">
            <div className="img-container"><img src={image} alt="image"/></div>
            <div className="friend-info">
            <h4>{name}</h4>
            <p>{status}</p>
            </div>
            <button className="btn">Select</button>
        </div>
    );
}

export default Friend;