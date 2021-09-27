import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default function ModalEmailPasswordWrong(props) {
  return (
    <>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className="text-center">
          <p style={{ color: "#D60000", fontSize: "24px", fontWeight: "bold" }}>Can't sign in. Email or password wrong!</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
