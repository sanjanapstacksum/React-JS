import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MDBContainer, MDBCol, MDBRow, MDBInput } from "mdb-react-ui-kit";
import blueLogo from "../Components/Images/blueLogo.png";
import reg from "../Components/Images/reg.png";
import "./Signup.css";
import { auth, db } from "../Firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const initialData = {
  name: "",
  email: "",
  number: "",
  password: "",
};

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errorMsgDiv, setErrorMsgDiv] = useState("");
  const [regEx, setRegEx] = useState("");

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validName = new RegExp("^[a-zA-Z ]{2,40}$");

  const validPhone = new RegExp("^[7-9][0-9]{9}$");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(auth, "auth");

    var isValid = true;
    if (!name || !email || !number || !password) {
      setErrorMsgDiv({
        name: !name ? "Please Enter name" : "",
        email: !email ? "Please Enter email" : "",
        number: !number ? "Please Enter number" : "",
        password: !password ? "Please Enter password" : "",
      });
      isValid = false;
    }

    if (
      (!validEmail.test(email) && email !== "") ||
      !validName.test(name) ||
      !validPhone.test(number)
    ) {
      setRegEx({
        number: !validPhone.test(number)
          ? "Please Enter correct Phone number"
          : "",
        email: !validEmail.test(email) ? "Please Enter correct Email" : "",
        name: !validName.test(name) ? "Please Enter correct name" : "",
      });
      isValid = false;
    }
    if (isValid) {
      createUserWithEmailAndPassword(auth, email, password, { displayName: "" })
        .then((response) => {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          setDoc(doc(db, "users", response?.user?.uid), {
            email: email,
            displayName: name,
            id: response?.user?.uid,
            number: number,
          }).then((docResponse) => {
            setSuccessMsg("Registered Successfully :)");
            setTimeout(() => {
              navigate("/login");
            }, 3000);
          });
        })
        .catch((error) => {
          if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            setTimeout(() => {
              setErrorMsg("User already exists");
            }, 1000);
            setErrorMsg("");
          }
        });
    }
  };

  return (
    <>
      <MDBContainer fluid className="p-3  h-custom">
        <MDBRow style={{ display: "flex", justifyContent: "center" }}>
          <MDBCol col="2" md="4">
            <img
              src={reg}
              className="img-fluid"
              style={{ marginTop: "125px", marginLeft: "25px" }}
              alt=""
            />
          </MDBCol>

          <MDBCol col="4" md="4" style={{ alignItem: "center" }}>
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
            {successMsg && (
              <>
                <div className="succ-msg">{successMsg}</div>
              </>
            )}
            {errorMsg && (
              <>
                <div className="error-msg">{errorMsg}</div>
              </>
            )}
            <div className="">Name</div>
            <MDBInput
              id="formControlLg"
              type="text"
              onChange={(e) => setName(e.target.value)}
              size="lg"
            />
            <span style={{ display: !name ? "block" : "none", color: "red" }}>
              {errorMsgDiv?.name}
            </span>
            <span style={{ display: !name ? "none" : "block", color: "red" }}>
              {regEx?.name}
            </span>
            <div className="">Phone Number</div>
            <MDBInput
              id="formControlLg"
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              size="lg"
            />
            <span style={{ display: !number ? "block" : "none", color: "red" }}>
              {errorMsgDiv?.number}
            </span>
            <span style={{ display: !number ? "none" : "block", color: "red" }}>
              {regEx?.number}
            </span>
            <div className="">Email</div>
            <MDBInput
              id="formControlLg"
              type="email"
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span style={{ display: !email ? "block" : "none", color: "red" }}>
              {errorMsgDiv?.email}
            </span>
            <span style={{ display: !email ? "none" : "block", color: "red" }}>
              {regEx?.email}
            </span>
            <div className="">Password</div>
            <MDBInput
              id="formControlLg"
              type="password"
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={{ display: !password ? "block" : "none", color: "red" }}
            >
              {errorMsgDiv?.password}
            </span>

            <div className="text-center text-md-start ">
              <button
                type="button"
                className="btn btn-primary my-2"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Registered already?{" "}
                <Link to="/login" className="link-primary">
                  Login
                </Link>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
        <div></div>
      </MDBContainer>
    </>
  );
}
export default Signup;
