import React, { useState } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Logo from "../assets/icon/icon.png";
import ReadBookImg from "../assets/img/read-book.png";
import { useHistory } from "react-router";

// Components
import IconWowOnly from "../components/IconWowOnly";
import LoadingAnimation from "../components/loading/LoadingAnimation";

export default function ReadBook() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(true), 1500);

  const history = useHistory();
  const handlePushHomePage = () => {
    history.push("/home-page");
  };
  return (
    <>
      {loading ? (
        <Container fluid style={{ backgroundColor: "#e5e5e5", paddingTop: "30px", height: "100vh" }}>
          <div>
            <IconWowOnly />
          </div>
          <div className="border w-75 mt-5 mx-auto">
            <Carousel className="text-center">
              <Carousel.Item>
                <img className="d-block w-100" src={ReadBookImg} alt="First slide" />
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>First slide</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ReadBookImg} alt="Second slide" />
                <Carousel.Caption>
                  <h3 style={{ color: "black" }}>Second slide</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
