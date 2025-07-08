import React, { use, useState } from "react";
import { useSelector } from "react-redux";

function UseRewardsPoints(props) {
  const user = useSelector((state) => state.user);
  const [usePoints, setUsePoints] = useState(false);

  const handleUsePoints = () => {
    props.setUseRewardsPoints(!usePoints);
    setUsePoints(!usePoints);
  };

  return (
    <div className="use-points-wrapper">
      <div className="use-points-header">Use your rewards points</div>
      <div className="use-points-subheader">Current rewards points:</div>
      <div className="rewards-points">{user.rewardPoints} points</div>
      <div className="checkbox-wrapper">
        <input type="checkbox" onClick={() => handleUsePoints()} />
        <label>Apply</label>
      </div>
    </div>
  );
}

export default UseRewardsPoints;
