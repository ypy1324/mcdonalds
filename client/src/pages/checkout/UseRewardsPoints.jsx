import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaRegQuestionCircle } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function UseRewardsPoints(props) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const [usePoints, setUsePoints] = useState(false);

  let subTotalPrice = 0;
  cart.cartItems.map((item) => {
    subTotalPrice += item.item.price * item.itemQuantity;
  });
  subTotalPrice = subTotalPrice.toFixed(2);

  const handleUsePoints = () => {
    props.setUseRewardsPoints(!usePoints);
    setUsePoints(!usePoints);
    if (subTotalPrice < user.rewardPoints / 100) {
      props.setRewardsPoints(subTotalPrice * 100);
    } else {
      props.setRewardsPoints(user.rewardPoints);
    }
  };

  return (
    <div className="use-points-wrapper">
      <div className="use-points-header">Use your rewards points</div>
      <div className="use-points-subheader">Current rewards points:</div>
      <div className="rewards-points-info">
        <div className="rewards-points">{user.rewardPoints} points</div>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id="button-tooltip">
              Use your rewards points for discounts, available when you have
              more than 1 point.
            </Tooltip>
          }
        >
          <FaRegQuestionCircle size="1.5rem" />
        </OverlayTrigger>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          disabled={user.rewardPoints === 0}
          onClick={() => handleUsePoints()}
        />
        <label>Apply</label>
      </div>
    </div>
  );
}

export default UseRewardsPoints;
