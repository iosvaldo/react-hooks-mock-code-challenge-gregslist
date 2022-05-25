import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {

  const [listings, setListings]= useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r =>r.json())
    .then((data)=>setListings(data))

  },[]);
console.log(listings)

  function onDelete(deleteItem){
    const deleteList = listings.filter((listing)=> listing.id !== deleteItem)
    setListings(deleteList)
    console.log(deleteList)
  }

  const filterListing = listings.filter(
    (listing) => 
    listing.description.includes(search) || listing.location.includes(search)
  );

  const renderListing = filterListing.map((listing) => 
  <ListingCard key={listing.id} listing={listing} deletedCard={onDelete}/>)

  return (
    <main>
      <ul className="cards">
        {renderListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
