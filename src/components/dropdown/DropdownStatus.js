import React from "react";
import { Dropdown } from "react-bootstrap";

export default function DropdownStatus() {
  return (
    <>
      <Dropdown style={{ cursor: "pointer" }}>
        <Dropdown.Toggle as="p" className="text-primary text-center m-0 w-25"></Dropdown.Toggle>
        <Dropdown.Menu style={{ border: "none", boxShadow: "0 0 10px grey" }}>
          <Dropdown.Item href="#" style={{ color: "#0ACF83", textAlign: "center" }}>
            Approved
          </Dropdown.Item>
          <Dropdown.Item href="#" style={{ color: "#FF0000", textAlign: "center" }}>
            Canceled
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
