// React
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

// Assets
import AddBookIcon from "../assets/icon/add-book-icon.png";
import AttacheBookIcon from "../assets/icon/attache-book-icon.png";
import ListTransaction from "../assets/icon/subs-icon.png";

// Components
import IconWowOnlyAdmin from "../components/IconWowOnlyAdmin";
import DropdownUserIcon from "../components/dropdown/DropdownUserIcon";
import ModalAddBookSuccess from "../components/modal/ModalAddBookSuccess";
import LoadingAnimation from "../components/loading/LoadingAnimation";

const styles = {
  formUpload: {
    color: "#767F8D",
    cursor: "pointer",
    border: "2px solid #BCBCBC",
    borderRadius: "5px",
    width: "200px",
    backgroundColor: "#D2D2D2",
  },
};

export default function AddBook() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(true), 1500);

  return (
    <>
      {loading ? (
        <>
          <Container fluid style={{ backgroundColor: "#E5E5E5", paddingTop: "30px", height: "100vh" }}>
            <div className="d-flex justify-content-between">
              <IconWowOnlyAdmin />
              <DropdownUserIcon link={"/list-transaction"} text={"List Transaction"} img={ListTransaction} />
            </div>
            <div className="mx-auto" style={{ marginTop: "50px", width: "60%" }}>
              <h4 style={{ marginBottom: "50px" }}>Add Book</h4>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Title" style={{ backgroundColor: "#D2D2D2" }} required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control type="date" placeholder="Publication Date" style={{ backgroundColor: "#D2D2D2" }} required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Pages" style={{ backgroundColor: "#D2D2D2" }} required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Author" style={{ backgroundColor: "#D2D2D2" }} required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="ISBN" style={{ backgroundColor: "#D2D2D2" }} required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Control as="textarea" placeholder="About This Book" style={{ backgroundColor: "#D2D2D2", height: "200px" }} required />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-4">
                  <Form.Label className="fw-bold p-2" style={styles.formUpload}>
                    Attache book file <img src={AttacheBookIcon} alt="icon" style={{ width: "20px", marginLeft: "14px" }} />
                  </Form.Label>
                  <Form.Control hidden type="file" />
                </Form.Group>
                <div className="read-book d-flex align-items-center p-2 rounded-3 ms-auto" style={{ cursor: "pointer", backgroundColor: "#D60000", width: "140px" }} onClick={() => setShowModal(true)}>
                  <p className="my-auto me-3 text-white fw-bold">Add Book</p>
                  <img src={AddBookIcon} alt="..." />
                </div>
              </Form>
            </div>
          </Container>

          <ModalAddBookSuccess show={showModal} onHide={setShowModal} />
        </>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
