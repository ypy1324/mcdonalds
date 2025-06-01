import React, { useState } from "react";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    if (
      !(
        name &&
        email &&
        password &&
        confirmPassword &&
        streetAddress &&
        city &&
        province &&
        postalCode
      )
    ) {
      return alert("Please fill in all fields.");
    }
    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }
    let createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    await createdUser.user.updateProfile({
      displayName: name,
    });
    console.log(createdUser.user);
  };

  return (
    <div className="register-wrapper">
      <div className="register-header">Create Account</div>
      <div className="register-form">
        <div className="register-form-fields">
          <div>
            <Input input="Name" type="text" setValue={setName} value={name} />
            <Input
              input="Email"
              type="email"
              setValue={setEmail}
              value={email}
            />
            <Input
              input="Password"
              type="password"
              setValue={setPassword}
              value={password}
            />
            <Input
              input="Confirm Password"
              type="password"
              setValue={setConfirmPassword}
              value={confirmPassword}
            />
          </div>
          <div>
            <Input
              input="Street Address"
              type="text"
              setValue={setStreetAddress}
              value={streetAddress}
            />
            <Input input="City" type="text" setValue={setCity} value={city} />
            <Input
              input="Province"
              type="text"
              setValue={setProvince}
              value={province}
            />
            <Input
              input="Postal Code"
              type="text"
              setValue={setPostalCode}
              value={postalCode}
            />
          </div>
        </div>
        <Link to="/register/success">
          <Button button="Sign Up" onClick={registerUser} />
        </Link>
        <div className="sign-in-area">
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
