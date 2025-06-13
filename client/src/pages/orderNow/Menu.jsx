import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import MealModal from "../../common/meal-modal/MealModal";
import Card from "react-bootstrap/Card";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import axios from "axios";

function Menu() {
  const params = useParams();

  const [menuItems, setMenuItems] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [showCard, setShowCard] = useState(false);

  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);

  useEffect(() => {
    let body = { category: params.category };
    axios
      .post("/api/menu/item", body)
      .then((res) => {
        if (res.data.success) {
          setMenuItems(res.data.item);
        } else {
          console.log("Failed to fetch menu items");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.category]);

  return (
    <div className="menu-wrapper">
      <div className="menu-header">{params.category}</div>
      {menuItems.map((item, i) => {
        return (
          <div key={i} className="menu-item">
            <Link to={`/ordernow/${params.category}/${item.name}`}>
              <img className="menu-item-image" src={item.image} />
            </Link>
            <div className="menu-item-name">{item.name}</div>
            <div className="menu-item-price">${item.price}</div>
            <div className="menu-item-rating">
              <AiOutlineStar />
              {item.rating} ({item.ratingCount})
            </div>
            <button className="menu-item-select" onClick={() => {}}>
              Select
            </button>
          </div>
        );
      })}
      {/* <MealModal
        showModal={showModal}
        handleShow={handleShow}
        handleClose={handleClose}
      /> */}
      {/* <Card body>
        <IoIosCheckmarkCircleOutline size="3rem" />
        <div>Item has been added to cart</div>
      </Card> */}
    </div>
  );
}

export default Menu;
