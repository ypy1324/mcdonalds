import React from "react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../common/button/Button";

function ChangeAddressSuccess() {
  return (
    <div className="change-address-success-wrapper">
      <IoIosCheckmarkCircleOutline size="5rem" />
      <div>Your address has been successfully updated!</div>
      <Link to="/">
        <Button button="Continue" />
      </Link>
    </div>
  );
}

export default ChangeAddressSuccess;
