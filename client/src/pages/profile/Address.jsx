import React from "react";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import "./Profile.css";

function Address() {
  return (
    <div className="profile-wrapper">
      <div className="profile-header">Change Address</div>
      <div className="address-form">
        <Input input="Street Address" type="text" />
        <Input input="City" type="text" />
        <Input input="Province" type="text" />
        <Input input="Postal Code" type="text" />
        <Link to="/profile/address/success">
          <Button button="Change Address" />
        </Link>
      </div>
    </div>
  );
}

export default Address;
