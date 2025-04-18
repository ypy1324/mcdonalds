import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../common/button/Button";
import { Link } from "react-router-dom";
import "./Success.css";

function Success(props) {
  return (
    <div className="success-wrapper">
      <IoIosCheckmarkCircleOutline size="5rem" />
      <div className="success-text">
        <div>{props.message1}</div>
        <div>{props.message2}</div>
      </div>
      <Link to="/">
        <Button button="Continue" />
      </Link>
    </div>
  );
}

export default Success;
