import React, { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

// Components
import bookDatas from "./BookDatas";
import { UserContext } from "../context/userContext";
import ModalNotSubscribe from "./modal/ModalNotSubscribe";

export default function ListBook() {
  const [state, dispatch] = useContext(UserContext);
  const [modalShowNotSubscribe, setModalShowNotSubscribe] = useState(false);
  const history = useHistory();

  const showModalNotSubscribe = () => setModalShowNotSubscribe(true);

  return (
    <>
      <div className=" w-75 ms-3">
        <Row>
          {bookDatas.map((data, index) => (
            <Col md={3}>
              <img
                src={data.image}
                alt="..."
                className="img-thubnail"
                onClick={() => {
                  if (!state.subs) {
                    showModalNotSubscribe();
                  } else {
                    history.push(`/detail-book/${data.id}`);
                  }
                }}
                style={{ cursor: "pointer" }}
              />
              <h5 className="mt-4">{data.name}</h5>
              <p>{data.author}</p>
            </Col>
          ))}
        </Row>
      </div>
      <ModalNotSubscribe show={modalShowNotSubscribe} onHide={() => setModalShowNotSubscribe(false)} />
    </>
  );
}
