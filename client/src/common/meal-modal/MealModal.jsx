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
        <div>
          <div>
            <IoFastFoodOutline />
          </div>
          Yes,
          <br />
          make it a meal
        </div>
        <div>
          <div>
            <PiHamburger />
          </div>
          No,
          <br />
          item only
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MealModal;
