// Library
import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Assets
import TopFrame from "../assets/img/top-frame.png";

// Components
import UserNavigation from "../components/navigation/UserNavigation";
import ListBook from "../components/ListBook";
import LoadingAnimation from "../components/loading/LoadingAnimation";

// UserContext
import { UserContext } from "../context/userContext";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  console.log("Landing Page");
  console.log(state);

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
              <img src={TopFrame} alt="..." style={{ width: "75%" }} />
              <h2 className="my-3 fw-bold ms-4">List Book</h2>
              <ListBook />
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
