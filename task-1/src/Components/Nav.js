import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand " href="/" style={{ color: "white" }}>
          React
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <ul class="navbar-nav float-right ">
          <li class="nav-item active ">
            <NavLink
              class="nav-link"
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </NavLink>
          </li>
          <li class="nav-item " >
            <NavLink
              class="nav-link"
              to="/signUp"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "10px",
              }}
            >
              Sign-Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
