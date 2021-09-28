// Library
import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router";

// Assets
import PageNotFound from "../assets/img/page-not-found.svg";

// Components
import LoadingAnimation from "../components/loading/LoadingAnimation";

export default function NotFound() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(true), 2000);

  return (
    <>
      {loading ? (
        <Container className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center mt-5">OOPS! Page Not Found</h1>
          <img src={PageNotFound} alt="" className="mt-5" />
          <Button variant="success" style={{ width: "20%", marginTop: "100px", fontWeight: "bold" }} onClick={() => history.push("/")}>
            Click here to back
          </Button>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
