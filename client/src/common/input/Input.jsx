import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.currentTarget.value)}
      />
      <div className={props.value === "" ? "label" : "label-filled"}>
        {props.input}
      </div>
    </div>
  );
}

export default Input;
