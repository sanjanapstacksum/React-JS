import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import blueLogo from "../Components/Images/blueLogo.png";
import cart from "../Components/Images/cart.png";
import user from "../Components/Images/user.png";

function Nav() {
  var getItem = localStorage.getItem("user-email");
  const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault()
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success m-2",
        cancelButton: "btn btn-danger mr-2",
        margin: "10px",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",

        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `Logout `,
        cancelButtonText: " Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "",
            "You have successfully logged out!.",
            "success"
          );
          localStorage.clear();
          navigate("/login");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled", "", "error");
        }
      });
  };

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light "
      style={{ height: "55px", background: "orange" }}
    >
      <Link class="navbar-brand" to="/">
        {" "}
        <img
          className="logo"
          src={blueLogo}
          style={{ width: "55px" }}
          alt="Logo"
        />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" id="home">
            <Link class="nav-link"  to="/">
              Home{" "}
            </Link>
          </li>
</ul>
<ul class="navbar-nav abcd">

          {getItem ? (
           <></>
          ) : (
            <>
              <li class="nav-item">
                <Link class="nav-link" to="/signUp">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}

          <li class="nav-item">
            <Link class="nav-link">
              <img
                className="cart"
                src={cart}
                style={{ width: "33px" }}
                alt="Logo"
              />
            </Link>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <Link class="nav-link">
                <img
                  className="cart"
                  src={user}
                  style={{ width: "33px" }}
                  alt="Logo"
                />
              </Link>
              <div class="dropdown-content">
                <Link to="/profile">Profile</Link>
                <Link to="/login">Sign In</Link>
                <a  href="/"onClick={logOut}>Logout</a>
              </div>
              
            </div>
          </li>
        </ul>
      </div>
      
    </nav>
    
  );
}

export default Nav;
