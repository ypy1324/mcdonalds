import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MealModal from "../../common/meal-modal/MealModal";
import Card from "react-bootstrap/Card";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { storeCartInfo } from "../../reducer/cartSlice";
import axios from "axios";

function Menu() {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.user);

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

  const handleAddToCart = (item) => {
    let body = {
      uid: user.uid,
      item: item,
    };
    axios
      .post("/api/cart/addToCart", body)
      .then((res) => {
        if (res.data.success) {
          axios.post("/api/cart/getCart", { uid: user.uid }).then((res) => {
            if (res.data.success) {
              let cartDetail = {
                quantity: res.data.cartItems.quantity,
                cartItems: res.data.cartItems.cartItems,
              };
              dispatch(storeCartInfo(cartDetail));
            }
          });
          console.log("Item added to cart successfully");
        } else {
          console.log("Failed to add item to cart");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-header">{params.category}</div>
      {menuItems.map((item, i) => {
        return (
          <div key={i} className="menu-item">
            <Link
              to={`/ordernow/${params.category}/${item.name}`}
              state={{ item }}
            >
              <img className="menu-item-image" src={item.image} />
            </Link>
            <div className="menu-item-name">{item.name}</div>
            <div className="menu-item-price">${item.price}</div>
            {user.uid && (
              <button
                className="menu-item-select"
                onClick={() => {
                  handleAddToCart(item);
                }}
              >
                Select
              </button>
            )}
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
