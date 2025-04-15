import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [value, setValue] = useState("");

  return (
    <div className="input-wrapper">
      <input
        className="input"
        type={props.type}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <div className={value === "" ? "label" : "label-filled"}>
        {props.input}
      </div>
    </div>
  );
}

export default Input;
