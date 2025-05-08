import React from "react";
import mainBurger from "../../assets/images/mainBurger.png";

function ItemDescription() {
  return (
    <div className="item-description-wrapper">
      <div>
        <img className="item-detail-image" src={mainBurger} />
      </div>
      <div>
        <div className="item-detail-name">Egg McMuffin</div>
        <div className="item-detail-price">
          <div>$6.99</div>
          <div>290 Cals</div>
        </div>
        <div className="item-detail-description">
          The Egg McMuffin is a breakfast sandwich consisting of a toasted
          English muffin, a slice of Canadian bacon, a freshly cracked egg, and
          a slice of American cheese. It is served hot and is a popular choice
          for breakfast on the go.
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemDescription;
