import React from "react";
import Button from "../../common/button/Button";

function RegisterSuccess() {
  return (
    <div className="register-success-wrapper">
      <div className="register-success-text">Congratulations!</div>
      <div className="register-success-text">
        Your account has been successfully created!
      </div>
      <Button button="Sign In" />
    </div>
  );
}

export default RegisterSuccess;
