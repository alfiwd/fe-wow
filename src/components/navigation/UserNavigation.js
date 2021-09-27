import React, { useState, useContext } from "react";
import Logo from "../../assets/icon/icon.png";
import UserPhoto from "../../assets/img/user-photo.png";
import ProfileIcon from "../../assets/icon/profile-icon.png";
import SubsIcon from "../../assets/icon/subs-icon.png";
import LogoutIcon from "../../assets/icon/logout-icon.png";
import AddBookIcon from "../../assets/icon/add-book-icon.svg";
import Styles from "../../stylesheets/HomePage.module.css";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

// Components
import { UserContext } from "../../context/userContext";
import ModalLogout from "../modal/ModalLogout";

export default function UserNavigation() {
  const [state] = useContext(UserContext);
  const [modalLogout, setModalLogout] = useState(false);

  const history = useHistory();
  const handlePushHomePage = () => {
    history.push("/home-page");
  };
  const handlePushSubscribe = () => {
    history.push("/subscribe");
  };
  const handlePushProfile = () => {
    history.push("/profile");
  };
  const handlePushAddBook = () => {
    history.push("/add-book");
  };
  const handlePushListTransaction = () => {
    history.push("/list-transaction");
  };

  let checkSubs = <p className={Styles.textSubs}>Not Subscribed Yet</p>;
  if (state.subs) {
    checkSubs = <p className={Styles.textSubsDone}>Subscribed</p>;
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <img src={Logo} alt="..." className={Styles.logo} style={{ cursor: "pointer" }} onClick={handlePushHomePage} />
        <img src={UserPhoto} alt="..." className={Styles.userPhoto} />
        <p className={Styles.name}>{state.user.fullName}</p>
        {checkSubs}
      </div>
      <hr className={Styles.hr} />
      <div className={Styles.listMenu}>
        <div className="d-flex my-5">
          <img src={ProfileIcon} alt="" className={Styles.icon} />
          <NavLink to="/profile" style={{ color: "#929292", textDecoration: "none" }} activeStyle={{ color: "#D60000", textDecoration: "none" }}>
            Profile
          </NavLink>
        </div>
        <div className="d-flex my-5">
          <img src={SubsIcon} alt="" className={Styles.icon} />
          <NavLink to="/subscribe" style={{ color: "#929292", textDecoration: "none" }} activeStyle={{ color: "#D60000", textDecoration: "none" }}>
            Subscribe
          </NavLink>
        </div>
        <hr />
        <div className="d-flex my-5">
          <img src={AddBookIcon} alt="" className={Styles.icon} />
          <NavLink to="/add-book" style={{ color: "#929292", textDecoration: "none" }} activeStyle={{ color: "#D60000", textDecoration: "none" }}>
            Add Book
          </NavLink>
        </div>
        <div className="d-flex my-5">
          <img src={SubsIcon} alt="" className={Styles.icon} />
          <NavLink to="/list-transaction" style={{ color: "#929292", textDecoration: "none" }} activeStyle={{ color: "#D60000", textDecoration: "none" }}>
            List Transaction
          </NavLink>
        </div>
        <hr />
        <div className="d-flex my-5">
          <img src={LogoutIcon} alt="" className={Styles.icon} />
          <p onClick={() => setModalLogout(true)} style={{ cursor: "pointer", color: "#929292" }}>
            Logout
          </p>
        </div>
      </div>

      <ModalLogout show={modalLogout} onHide={() => setModalLogout(false)} />
    </>
  );
}
