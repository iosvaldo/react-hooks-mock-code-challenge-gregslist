import React, { useState } from "react";

function ListingCard({listing, deletedCard}) {

const {description, id, image, location} = listing;
const [favorite, setFavorite] = useState(false)

function handleDelete(){
  fetch(`http://localhost:6001/${id}`,{
    method: "DELETE" })
.then(r => r.json())
.then(() => deletedCard(id))
}

function handleFavorite(){
  console.log("clicked")
  setFavorite(true);
}

function handleUnFavorite(){
  console.log("un-clicked")
  setFavorite(false);
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleUnFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
