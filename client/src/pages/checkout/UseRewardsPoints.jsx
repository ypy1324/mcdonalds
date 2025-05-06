import React from "react";

function UseRewardsPoints() {
  return (
    <div className="use-points-wrapper">
      <div className="use-points-header">Use your rewards points</div>
      <div className="use-points-subheader">Current rewards points:</div>
      <div className="rewards-points">837 points</div>
      <div className="checkbox-wrapper">
        <input type="checkbox" />
        <label>Apply</label>
      </div>
    </div>
  );
}

export default UseRewardsPoints;
