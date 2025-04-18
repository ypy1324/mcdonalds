import React from "react";
import "./Button.css";

function Button(props) {
  return <button className="button">{props.button}</button>;
}

export default Button;
