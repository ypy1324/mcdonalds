import React, { useState } from "react";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebase";
import "./SignIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInUser = async (e) => {
    if (!(email && password)) {
      return alert("Please fill in all fields.");
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.code === "auth/user-not-found") {
        return alert("User not found. Please register.");
      } else if (err.code === "auth/wrong-password") {
        return alert("Incorrect password. Please try again.");
      } else {
        return alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-header">Sign In</div>
      <div className="sign-in-form">
        <Input input="Email" type="email" setValue={setEmail} value={email} />
        <Input
          input="Password"
          type="password"
          setValue={setPassword}
          value={password}
        />
        <Button button="Sign In" onClick={signInUser} />
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
