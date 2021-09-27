import React from "react";
import Logo from "../assets/icon/icon.png";
import { useHistory } from "react-router";

export default function IconWowOnly() {
  const history = useHistory();
  const handlePushReadBook = () => {
    history.push("/home-page");
  };
  return (
    <>
      <img src={Logo} alt="..." style={{ marginLeft: "175px", cursor: "pointer" }} onClick={handlePushReadBook} />
    </>
  );
}
