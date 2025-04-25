import React from "react";
import { useParams } from "react-router-dom";
import mainBurger from "../../assets/images/mainBurger.png";

function Menu() {
  const params = useParams();
  const items = [
    { name: "Egg McMuffin", price: 6.99, rating: 4.9, ratingCount: 12 },
    { name: "Cheeseburger Deluxe", price: 8.99, rating: 4.3, ratingCount: 42 },
    { name: "Big Mac", price: 2.99, rating: 2.1, ratingCount: 104 },
    { name: "McSpicy", price: 1.99, rating: 4.4, ratingCount: 3 },
    { name: "Filet-O-Fish", price: 12.99, rating: 3.9, ratingCount: 72 },
    {
      name: "Chicken Breakfast Wrap",
      price: 0.99,
      rating: 1.9,
      ratingCount: 401,
    },
  ];

  return (
    <div className="menu-wrapper">
      <div className="menu-header">{params.category}</div>
      {items.map((item, i) => {
        return (
          <div key={i} className="menu-item">
            <img className="item-image" src={mainBurger} />
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}</div>
            <div className="item-rating">
              {item.rating} ({item.ratingCount})
            </div>
            <div className="item-select">Select</div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
