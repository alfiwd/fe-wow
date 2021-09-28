// Library
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Assets and Stylesheets
import Logo from "../../assets/icon/icon.png";
import UserPhoto from "../../assets/img/user-photo.png";
import LogoutIcon from "../../assets/icon/logout-icon.png";
import AddBookIcon from "../../assets/icon/add-book-icon.svg";
import SubsIcon from "../../assets/icon/subs-icon.png";
import Styles from "../../stylesheets/HomePage.module.css";

// Components
import ModalLogout from "../modal/ModalLogout";
import { UserContext } from "../../context/userContext";

export default function AdminNavigation() {
  const [state] = useContext(UserContext);
  const [modalLogout, setModalLogout] = useState(false);

  const history = useHistory();
  const handlePushHomePageAdmin = () => {
    history.push("/home-page-admin");
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <img src={Logo} alt="..." className={Styles.logo} style={{ cursor: "pointer" }} onClick={handlePushHomePageAdmin} />
        <img src={UserPhoto} alt="..." className={Styles.userPhoto} />
        <p className={Styles.name}>{state.admin.status}</p>
      </div>
      <hr className={Styles.hr} />
      <div className={Styles.listMenu}>
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
