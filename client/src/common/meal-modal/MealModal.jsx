import React from "react";
import Modal from "react-bootstrap/Modal";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import "./MealModal.css";

function MealModal(props) {
  return (
    <Modal
      show={props.showModal}
      onHide={props.handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>Would you like to make it a meal?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="meal-modal-body">
        <div className="meal-modal-options">
          <IoFastFoodOutline size="3rem" />
          <div>Yes,</div>
          <div>make it a meal</div>
          <div className="meal-modal-extra">+ $3.99</div>
        </div>
        <div className="meal-modal-or">or</div>
        <div className="meal-modal-options">
          <PiHamburger size="3rem" />
          <div>No,</div>
          <div>item only</div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MealModal;
