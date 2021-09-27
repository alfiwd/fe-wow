import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Components
import UserNavigation from "../components/navigation/UserNavigation";
import AboutBook from "../components/AboutBook";
import LoadingAnimation from "../components/loading/LoadingAnimation";

export default function DetailBook() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(true), 1500);

  return (
    <>
      {loading ? (
        <Container fluid style={{ backgroundColor: "#e5e5e5" }}>
          <Row>
            <Col md={3} style={{ paddingTop: "30px" }}>
              <UserNavigation />
            </Col>
            <Col md={9}>
              <AboutBook />
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
