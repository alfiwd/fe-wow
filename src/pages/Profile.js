import React, { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import EmailIcon from "../assets/icon/email-icon.png";
import GenderIcon from "../assets/icon/gender-icon.png";
import PhoneIcon from "../assets/icon/phone-icon.png";
import LocationIcon from "../assets/icon/location-icon.png";
import UserPhotoLarge from "../assets/img/user-photo-large.png";
import { useHistory } from "react-router";

// Components
import UserNavigation from "../components/navigation/UserNavigation";
import { UserContext } from "../context/userContext";
import ModalComingSoon from "../components/modal/ModalComingSoon";
import LoadingAnimation from "../components/loading/LoadingAnimation";

export default function Profile() {
  const [state] = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  setTimeout(() => setLoading(true), 1500);

  let image = "";
  if (state.book.image) {
    image = (
      <img
        src={state.book.image}
        className="img-thubnail"
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push("/detail-book-added");
        }}
      />
    );
  }

  return (
    <>
      {loading ? (
        <>
          <Container fluid style={{ backgroundColor: "#e5e5e5", paddingTop: "30px", height: "100vh" }}>
            <Row>
              <Col md={3}>
                <UserNavigation />
              </Col>
              <Col md={9}>
                <h2 className="my-4 fw-bold">Profile</h2>
                <div style={{ backgroundColor: "#FFD9D9", padding: "20px", borderRadius: "10px", width: "80%", boxShadow: "0 0 20px grey" }}>
                  <Row>
                    <Col md={6}>
                      <div className="email d-flex mb-4">
                        <div className="email-icon my-auto me-3">
                          <img src={EmailIcon} alt="" style={{ with: "30px" }} />
                        </div>
                        <div className="text">
                          <p style={{ marginBottom: "0", fontWeight: "bold" }}>{state.user.email}</p>
                          <p style={{ marginBottom: "0", fontSize: "14px", color: "#8A8C90" }}>Email</p>
                        </div>
                      </div>
                      <div className="genre d-flex mb-4">
                        <div className="gender-icon my-auto me-3">
                          <img src={GenderIcon} alt="" style={{ with: "30px" }} />
                        </div>
                        <div className="text">
                          <p style={{ marginBottom: "0", fontWeight: "bold" }}>Male</p>
                          <p style={{ marginBottom: "0", fontSize: "14px", color: "#8A8C90" }}>Gender</p>
                        </div>
                      </div>
                      <div className="phone d-flex mb-4">
                        <div className="phone-icon my-auto me-3">
                          <img src={PhoneIcon} alt="" style={{ with: "30px" }} />
                        </div>
                        <div className="text">
                          <p style={{ marginBottom: "0", fontWeight: "bold" }}>0812-1234-4321</p>
                          <p style={{ marginBottom: "0", fontSize: "14px", color: "#8A8C90" }}>Mobile Phone</p>
                        </div>
                      </div>
                      <div className="location d-flex mb-4">
                        <div className="location-icon my-auto me-3">
                          <img src={LocationIcon} alt="" style={{ with: "30px", marginRight: "5px" }} />
                        </div>
                        <div className="text">
                          <p style={{ marginBottom: "0", fontWeight: "bold" }}>Ciater Permai BSD Serpong</p>
                          <p style={{ marginBottom: "0", fontSize: "14px", color: "#8A8C90" }}>Address</p>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="ms-auto mt-3" style={{ width: "229px" }}>
                        <div>
                          <img src={UserPhotoLarge} alt="" style={{ borderRadius: "5px" }} />
                        </div>
                        <div className="mt-3">
                          <Button variant="danger" style={{ backgroundColor: "#D60000", width: "100%" }} onClick={() => setShowModal(true)}>
                            Edit Profile
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <h2 className="my-4 fw-bold">My List Book</h2>
                <div>
                  {image}
                  <h5 className="mt-4">{state.book.name}</h5>
                  <p>{state.book.author}</p>
                </div>
              </Col>
            </Row>
          </Container>

          <ModalComingSoon show={showModal} onHide={setShowModal} />
        </>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
