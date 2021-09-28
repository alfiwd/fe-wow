// Library
import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalNotSignUp(props) {
  return (
    <>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="text-center">
          <p style={{ color: "#D60000", fontSize: "24px", fontWeight: "bold" }}>You're not sign up yet. Please sign up</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
