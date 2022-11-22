import { React, useState } from "react";

import { Link } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import blueLogo from "../Components/Images/blueLogo.png";
import reg from "../Components/Images/reg.png";
import "./Login.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <MDBContainer fluid className="p-3  h-custom">
      <MDBRow style={{ display: "flex", justifyContent: "center" }}>
        <MDBCol col="2" md="4">
          <img
            src={reg}
            class="img-fluid"
            style={{ marginTop: "125px", marginLeft: "25px" }}
            alt=""
          />
        </MDBCol>

        <MDBCol
          col="4"
          md="4"
          style={{ alignItem: "center" }}
          
        >
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 ">
              <img
                className="logo"
                src={blueLogo}
                style={{ width: "70px" }}
                alt="Logo"
              />{" "}
            </p>
          </div>

          <div className="divider d-flex align-items-center ">
            <p className="text-center fw-bold  mb-0">
              <h2>Sign Up</h2>
            </p>
          </div>
          <label className="">Name</label>
          <MDBInput
            id="formControlLg"
            type="text"
            onChange={(e) => setName(e.target.value)}
            size="lg"
          />
          <label className="">Phone Number</label>
          <MDBInput
            id="formControlLg"
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            size="lg"
          />
          <label className="">Email</label>
          <MDBInput
            id="formControlLg"
            type="email"
            size="lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="">Password</label>
          <MDBInput
            id="formControlLg"
            type="password"
            size="lg"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-center text-md-start ">
            <button type="button" class="btn btn-primary my-2" onClick={handleSubmit}>
              Sign Up
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Registered already?{" "}
              <Link to="/login" className="link-primary" >
                Login
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      <div></div>
    </MDBContainer>
  );
}
export default Signup;
