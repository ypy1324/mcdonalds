import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className="button" onClick={(e) => props.onClick(e)}>
      {props.button}
    </button>
  );
}

export default Button;
