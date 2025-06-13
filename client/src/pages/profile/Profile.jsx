import React from "react";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="profile-wrapper">
      <div className="profile-header">My Profile</div>
      <div className="profile-form">
        <div className="profile-field">
          <div className="profile-key">Name</div>
          <div className="profile-value">{user.displayName}</div>
        </div>
        <hr className="profile-divider" />
        <div className="profile-field">
          <div className="profile-key">Email</div>
          <div className="profile-value">{user.email}</div>
        </div>
        <hr className="profile-divider" />
        <div className="profile-field">
          <div className="profile-key">Rewards Points</div>
          <div className="profile-value">{user.rewardPoints} pts</div>
        </div>
        <hr className="profile-divider" />
        <div className="profile-field">
          <div className="profile-key">Address</div>
          <div className="profile-value">
            {user.address.street}, {user.address.city}, {user.address.province},{" "}
            {user.address.postalCode}
          </div>
        </div>
        <Link to="/profile/changeAddress">
          <Button button="Change Address" />
        </Link>
      </div>
    </div>
  );
}

export default Profile;
