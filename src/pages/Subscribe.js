// Library
import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Assets
import IconSmall from "../assets/icon/icon-small.png";
import UploadIcon from "../assets/icon/upload-icon.png";

// Components
import UserNavigation from "../components/navigation/UserNavigation";
import ModalSubscribe from "../components/modal/ModalSubscribe";
import { UserContext } from "../context/userContext";
import LoadingAnimation from "../components/loading/LoadingAnimation";

const styles = {
  formInputAccount: {
    backgroundColor: "#BCBCBC",
    color: "black",
  },
  formUpload: {
    color: "#D60000",
    cursor: "pointer",
    border: "2px solid #BCBCBC",
    borderRadius: "5px",
    width: "100%",
  },
  position: {
    marginTop: "225px",
    marginLeft: "200px",
  },
};

export default function Subscribe() {
  const [state, dispatch] = useContext(UserContext);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(true), 1500);

  const handleOnClick = (e) => {
    e.preventDefault();
    document.getElementById("phone-number").value = "";
    setModalShow(true);
    dispatch({
      type: "SUBS",
    });
  };

  return (
    <>
      {loading ? (
        <>
          <Container fluid style={{ backgroundColor: "#E5E5E5", paddingTop: "30px", height: "100vh" }}>
            <Row>
              <Col md={3}>
                <UserNavigation />
              </Col>
              <Col md={9}>
                <div className="d-flex flex-column justify-content-center align-items-center w-50" style={styles.position}>
                  <h4 className="mb-5">Premium</h4>
                  <p>
                    Pay now and access all the latest books from <img src={IconSmall} alt=".." />
                  </p>
                  <p>
                    <img src={IconSmall} alt=".." /> : 0981312323
                  </p>
                  <Form className="w-50 mx-auto">
                    <Form.Group className="mb-3 mt-2">
                      <Form.Control type="number" className="py-2" id="phone-number" style={styles.formInputAccount} placeholder="Input your account number" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label className="fw-bold p-2 mb-4" style={styles.formUpload}>
                        Attache proof of transfer <img src={UploadIcon} alt="icon" style={{ width: "5%", marginLeft: "124px" }} />
                      </Form.Label>
                      <Form.Control hidden type="file" />
                    </Form.Group>
                    <Button variant="danger" type="submit" style={{ backgroundColor: "#D60000", width: "100%" }} onClick={handleOnClick}>
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>

          <ModalSubscribe show={modalShow} onHide={() => setModalShow(false)} />
        </>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
