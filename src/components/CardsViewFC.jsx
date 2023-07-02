import React from "react";

export const CardsView = ({items}) => {
  const arrProducts = items;

  let i = 0;
  const arrResult = [];
  let arrTemp = [];
  while (arrProducts.length > i) {
    arrTemp.push(arrProducts[i]);
    if (arrTemp.length === 3) {
      arrResult.push(<LineCards line={arrTemp} />)
      arrTemp = [];
    }
    i += 1
  }

  return (
    <>{arrResult}</>
  )
}

const LineCards = ({line}) => {
  const arrOut = [];
  line.forEach(element => {
    arrOut.push(<Card one={element} />)
  });
  return (
    <div className="line-cards">
      {arrOut}
    </div>
  )
}

const Card = ({one}) => {
  return (
    <div className="block-card">
      <div className="card-title">{one.name.toUpperCase()}</div>
      <div className="card-color">{one.color}</div>
      <img className="card-img" src={one.img} />
      <div className="line-text">
        <div className="card-price">${one.price}</div>
        <div className="card-add">ADD TO CARD</div>
      </div>
    </div>
  )
}
