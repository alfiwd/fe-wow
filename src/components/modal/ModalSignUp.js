// Library
import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

// Components
import ModalSignIn from "./ModalSignIn";
import { UserContext } from "../../context/userContext";

export default function ModalSignUp(props) {
  const [modalShowSignIn, setModalShowSignIn] = useState(false);
  const [state, dispatch] = useContext(UserContext);

  const handleOnSubmit = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("full-name").value;

    const data = {
      email,
      password,
      fullName,
    };

    dispatch({
      type: "SIGN_UP_SUCCESS",
      payload: data,
    });
    e.preventDefault();
  };

  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body style={{ borderRadius: "50px !important" }}>
          <h2 style={{ margin: "10px 0 30px 0" }}>Sign Up</h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Control type="email" id="email" style={{ backgroundColor: "#BCBCBC40" }} placeholder="Email" name="email" id="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" id="password" style={{ backgroundColor: "#BCBCBC40" }} placeholder="Password" name="password" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" id="full-name" style={{ backgroundColor: "#BCBCBC40" }} placeholder="Full Name" name="fullName" required />
            </Form.Group>
            <Button variant="danger" type="submit" style={{ width: "100%", backgroundColor: "#D60000", marginTop: "15px" }}>
              Sign Up
            </Button>
            <Form.Group className="my-3">
              <p className="text-center">
                Already have an account? Klik <b style={{ cursor: "pointer" }}>Here</b>
              </p>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

      <ModalSignIn show={modalShowSignIn} onHide={() => setModalShowSignIn(false)} />
    </div>
  );
}
