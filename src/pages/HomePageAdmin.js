// Library
import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Assets
import ForAdminIcon from "../assets/icon/for-admin-icon.svg";

// Components
import LoadingAnimation from "../components/loading/LoadingAnimation";
import AdminNavigation from "../components/navigation/AdminNavigation";

// UserContext
import { UserContext } from "../context/userContext";

export default function HomePageAdmin() {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  console.log("Landing Page");
  console.log(state);

  setTimeout(() => setLoading(true), 1500);

  return (
    <>
      {loading ? (
        <Container fluid style={{ backgroundColor: "#e5e5e5", height: "100vh" }}>
          <Row>
            <Col md={3} style={{ paddingTop: "30px" }}>
              <AdminNavigation />
            </Col>
            <Col md={9}>
              <img src={ForAdminIcon} alt="" className="w-50" style={{ margin: "125px 0 0 250px" }} />
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
