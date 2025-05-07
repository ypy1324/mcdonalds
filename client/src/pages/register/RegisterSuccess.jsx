import React from "react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../common/button/Button";

function RegisterSuccess() {
  return (
    <div className="register-success-wrapper">
      <IoIosCheckmarkCircleOutline size="5rem" />
      <div className="register-success-text">
        <div>Congratulations!</div>
        <div>Your account has been successfully created!</div>
      </div>
      <Link to="/">
        <Button button="Continue" />
      </Link>
    </div>
  );
}

export default RegisterSuccess;
