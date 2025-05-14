import React from "react";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-header">Sign In</div>
      <div className="sign-in-form">
        <Input input="Email" type="email" />
        <Input input="Password" type="password" />
        <Button button="Sign In" />
        <div className="register-area">
          <div>Don't have an account?</div>
          <Link to="/register" className="register-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
