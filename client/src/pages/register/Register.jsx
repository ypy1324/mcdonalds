import React from "react";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-header">Create Account</div>
      <div className="register-form">
        <div className="register-form-fields">
          <div>
            <Input input="Name" type="text" />
            <Input input="Email" type="email" />
            <Input input="Password" type="password" />
            <Input input="Confirm Password" type="password" />
          </div>
          <div>
            <Input input="Street Address" type="text" />
            <Input input="City" type="text" />
            <Input input="Province" type="text" />
            <Input input="Postal Code" type="text" />
          </div>
        </div>
        <Link to="/register/success">
          <Button button="Sign Up" />
        </Link>
        <div className="sign-in">
          <div>Already have an account?</div>
          <Link to="/signin" className="sign-in-link">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
