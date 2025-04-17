import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import "./Register.css";

function RegisterSuccess() {
  return (
    <div className="register-success-wrapper">
      <IoIosCheckmarkCircleOutline size="5rem" />
      <div className="register-success-text">
        <div>Congratulations!</div>
        <div>Your account has been successfully created!</div>
      </div>
      <Link to="/signin">
        <Button button="Sign In" />
      </Link>
    </div>
  );
}

export default RegisterSuccess;
