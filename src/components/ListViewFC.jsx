import React from "react";

export const ListView = ({items}) => {
  const arrOut = [];
  items.forEach(element => {
    arrOut.push(<LineViewCard one={element} />)
  });
  
  return (
    <>{arrOut}</>
  )
}

const LineViewCard = ({one}) => {
  return (
    <div className="lineview-card">
      <img className="lineview-card-img" src={one.img} />
      <div className="lineview-card-title">{one.name.toUpperCase()}</div>
      <div className="lineview-card-color">{one.color}</div>
      <div className="lineview-line-text">
        <div className="card-price">${one.price}</div>
        <div className="card-add">ADD TO CARD</div>
      </div>
    </div>
  )
}
