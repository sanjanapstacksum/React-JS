import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import blueLogo from "../Components/Images/blueLogo.png";
import "./Login.css";

import { Link } from "react-router-dom";
function Login() {
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow style={{ display: "flex", justifyContent: "center" }}>
        <MDBCol col="2" md="4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            style={{ marginTop: "135px" }}
            alt=""
          />
        </MDBCol>

        <MDBCol col="4" md="4" style={{ alignItem: "center", height: "20%" }}>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">
              <img
                className="logo"
                src={blueLogo}
                style={{ width: "70px" }}
                alt="Logo"
              />{" "}
            </p>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">
              <h2>Sign In</h2>
            </p>
          </div>
          <label className="">Email</label>
          <MDBInput
            wrapperClass="mb-4"
           
            id="formControlLg"
            type="email"
            size="lg"
          />
          <label className="">Password</label>
          <MDBInput
            wrapperClass="mb-4"
           
            id="formControlLg"
            type="password"
            size="lg"
          />

          <div className="text-center text-md-start mt-4 pt-2">
            <button type="button" class="btn btn-primary">
              Sign In
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link to="/signUp" className="link-primary">
                Register
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      <div></div>
    </MDBContainer>
  );
}
export default Login;