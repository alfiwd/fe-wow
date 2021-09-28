// Library
import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router";

// Components
import { UserContext } from "../../context/userContext";

export default function ModalSignUp(props) {
  const [state] = useContext(UserContext);
  console.log("Modal Sign In");
  console.log(state);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!state.user.email) {
      alert("daftar dulu bos!");
    }
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === state.user.email && password === state.user.password) {
      handlePushHomePage();
    } else {
      alert("Email atau password salah!");
    }

    const data = {
      email,
      password,
    };
  };
  const history = useHistory();
  const handlePushHomePage = () => {
    history.push("/home-page");
  };

  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <h2 style={{ margin: "10px 0 30px 0" }}>Sign In</h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Control type="email" style={{ backgroundColor: "#BCBCBC40" }} placeholder="Email" name="email" id="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" style={{ backgroundColor: "#BCBCBC40" }} placeholder="Password" name="password" id="password" required />
            </Form.Group>
            <Button variant="danger" type="submit" style={{ width: "100%", backgroundColor: "#D60000" }}>
              Sign In
            </Button>
            <Form.Group className="my-3">
              <p className="text-center">
                Don't have an account? Klik <b style={{ cursor: "pointer" }}>Here</b>
              </p>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
