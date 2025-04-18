import React from "react";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-header">My Profile</div>
      <div className="profile-form">
        <div className="profile-field">
          <div className="profile-key">Name</div>
          <div className="profile-value">Mark</div>
        </div>
        <hr className="h-line" />
        <div className="profile-field">
          <div className="profile-key">Email</div>
          <div className="profile-value">mark123@gmail.com</div>
        </div>
        <hr className="h-line" />
        <div className="profile-field">
          <div className="profile-key">Rewards Points</div>
          <div className="profile-value">465 pts</div>
        </div>
        <hr className="h-line" />
        <div className="profile-field">
          <div className="profile-key">Address</div>
          <div className="profile-value">25 Holly St, Toronto, ON, M4S 0E3</div>
        </div>
        <Link to="/profile/address">
          <Button button="Change Address" />
        </Link>
      </div>
    </div>
  );
}

export default Profile;
