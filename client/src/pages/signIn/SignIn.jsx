import React from "react";
import Button from "../../common/button/Button";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-header">Sign In</div>
      <div className="sign-in-form">
        <div className="input-field">
          <input className="input" />
          <div className="label">name</div>
        </div>
        <input />
        <Button />
        <div className="register">
          <div>Don't have an account?</div>
          <div className="register-link">Register</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
