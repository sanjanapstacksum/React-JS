import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div class="container-fluid">
        <div
          class="row"
          style={{ justifyContent: "center", marginTop: "50px" }}
        >
          <div class="col-lg-6">
            <div class="card shadow">
              <div class="card-body">
                <form>
                  <div class="form-body">
                    <div class="row center">
                      <h2>Sign-Up</h2>
                    </div>
                    <br />
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="control-label">Name</label>
                          <input
                            type="text"
                            id="first_name"
                            class="form-control "
                            placeholder="Enter Your Name"
                            name="name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="control-label"> User Name</label>
                          <input
                            type="text"
                            id="last_name"
                            class="form-control "
                            placeholder="Enter Username"
                            name="username"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="control-label">Email</label>
                          <input
                            type="text"
                            placeholder="Enter Your Email"
                            name="email"
                            id="email"
                            class="form-control "
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="control-label">Phone</label>
                          <input
                            type="number"
                            placeholder="Enter Your PhoneNumber"
                            name="phone"
                            id="email"
                            class="form-control "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="control-label">Password</label>
                          <input
                            type="password"
                            placeholder="Enter Website"
                            name="website"
                            id="password"
                            class="form-control "
                          />
                        </div>
                      </div>
                    </div>

                    <br />
                    <div class="form-actions">
                      <button type="submit" class="btn btn-primary" id="save">
                        <i class="fa fa-check"></i> Register{" "}
                      </button>
                      <h6>
                        Registered already? <Link to="/login">Login</Link>
                      </h6>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
