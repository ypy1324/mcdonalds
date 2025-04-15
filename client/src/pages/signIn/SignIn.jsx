import React from "react";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-header">Sign In</div>
      <div className="sign-in-form">
        <Input input="Email" type="email" />
        <Input input="Password" type="password" />
        <Button button="Sign In" />
        <div className="register">
          <div>Don't have an account?</div>
          <div className="register-link">Register</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
