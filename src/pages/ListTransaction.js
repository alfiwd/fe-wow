// Library
import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";

// Assets
import AddBookIcon from "../assets/icon/add-book-icon.svg";

// Components
import IconWowOnlyAdmin from "../components/IconWowOnlyAdmin";
import DropdownUserIcon from "../components/dropdown/DropdownUserIcon";
import DropdownStatus from "../components/dropdown/DropdownStatus";
import transactionDatas from "../components/TransactionDatas";
import LoadingAnimation from "../components/loading/LoadingAnimation";

export default function ListTransaction() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => setLoading(true), 1500);

  return (
    <>
      {loading ? (
        <Container fluid style={{ backgroundColor: "#E5E5E5", paddingTop: "30px", height: "100vh" }}>
          <div className="d-flex justify-content-between">
            <IconWowOnlyAdmin />
            <DropdownUserIcon link={"/add-book"} text={"Add Book"} img={AddBookIcon} />
          </div>
          <div className="mx-auto w-75" style={{ marginTop: "95px" }}>
            <h4 style={{ marginBottom: "42px" }}>Incoming Transaction</h4>
            <Table responsive="md" striped hover>
              <thead>
                <tr>
                  <th className="p-4">
                    <span style={{ color: "#D60000" }}>No</span>
                  </th>
                  <th className="p-4">
                    <span style={{ color: "#D60000" }}>Users</span>
                  </th>
                  <th className="p-4">
                    <span style={{ color: "#D60000" }}>Bukti Transfer</span>
                  </th>
                  <th className="p-4">
                    <span style={{ color: "#D60000" }}>Remaining Active</span>
                  </th>
                  <th className="p-4">
                    <span style={{ color: "#D60000" }}>Status User</span>
                  </th>
                  <th className="p-4">
                    <span style={{ color: "#D60000" }}>Status Payment</span>
                  </th>
                  <th className="p-4">
                    <span style={{ color: "#D60000" }}>Status</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionDatas.map((data, index) => (
                  <tr>
                    <td className="p-4">{data.no}</td>
                    <td className="p-4">{data.users}</td>
                    <td className="p-4">{data.buktiTransfer}</td>
                    <td className="p-4">{data.remainingActive} / Day</td>
                    <td className="p-4">{data.remainingActive > 0 ? <b className="text-success">Active</b> : <b style={{ color: "#FF0742" }}>Not Active</b>}</td>
                    <td className="p-4">
                      {data.statusPayment === "Approve" ? <b className="text-success">Approve</b> : ""}
                      {data.statusPayment === "Pending" ? <b className="text-warning">Pending</b> : ""}
                      {data.statusPayment === "Cancel" ? <b className="text-danger">Cancel</b> : ""}
                    </td>
                    <td className="p-4">
                      <DropdownStatus />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      ) : (
        <LoadingAnimation />
      )}
    </>
  );
}
