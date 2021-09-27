import React, { useContext, useState } from "react";
import ReadBookIcon from "../assets/icon/read-book-icon.png";
import { useHistory } from "react-router";
import { UserContext } from "../context/userContext";
import { Container, Row, Col } from "react-bootstrap";

// Components
import UserNavigation from "../components/navigation/UserNavigation";
import LoadingAnimation from "../components/loading/LoadingAnimation";

export default function ViewBookAdded() {
  const [state] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(true), 1500);

  const history = useHistory();
  const handlePushReadBook = () => {
    history.push("/read-book");
  };

  return (
    <>
      {loading ? (
        <Container fluid style={{ backgroundColor: "#e5e5e5" }}>
          <Row>
            <Col md={3} style={{ paddingTop: "30px" }}>
              <UserNavigation />
            </Col>
            <Col md={9}>
              <div className="d-flex align-items-center" style={{ height: "100vh", width: "70%" }}>
                <div className="">
                  <div className="d-flex">
                    <div className="me-4">
                      <img src={state.book.image} alt="" style={{ width: "300px" }} className="img-fluid" />
                    </div>
                    <div>
                      <div className="list">
                        <h1>{state.book.name}</h1>
                        <p>{state.book.author}</p>
                      </div>
                      <div className="list">
                        <h3>Publication Date</h3>
                        <p>{state.book.publicationDate}</p>
                      </div>
                      <div className="list">
                        <h3>Pages</h3>
                        <p>{state.book.pages}</p>
                      </div>
                      <div className="list">
                        <h3>ISBN</h3>
                        <p>{state.book.isbn}</p>
                      </div>
                    </div>
                  </div>
                  <div className="aboutBook mt-5">
                    <h2 className="mb-3">About This Book</h2>
                    <p style={{ textAlign: "justify" }}>
                      In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s
                      wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across
                      the Southlands, alone and pretending to be a boy.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But
                      Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once
                      again in this wholly original fantasy.
                    </p>
                  </div>
                  <div className="mt-5 d-flex justify-content-end">
                    <div className="read-book bg-secondary d-flex align-items-center p-2 rounded-3" style={{ cursor: "pointer" }} onClick={handlePushReadBook}>
                      <p className="my-auto me-3 text-black fw-bold">Read Book</p>
                      <img src={ReadBookIcon} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
