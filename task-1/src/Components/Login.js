import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div>
      <div class="container-fluid">
        <div
          class="row"
          style={{ justifyContent: "center", marginTop: "150px" }}
        >
          <div class="col-lg-6">
            <div class="card shadow">
              <div class="card-body">
                <form >
                  <div class="form-body">
                    <div class="row center">
                      <h2>Log-In</h2>
                    </div>
                    <br />

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
                          <label class="control-label">password</label>
                          <input
                            type="password"
                            placeholder="Enter Your PhoneNumber"
                            name="phone"
                            id="email"
                            class="form-control "
                          />
                        </div>
                      </div>
                    </div>

                    <br />
                    <div class="form-actions">
                      <button type="submit" class="btn btn-primary" id="save">
                        <i class="fa fa-check"></i> Login{" "}
                      </button>
                      <h6>
                        Haven't registered yet?{" "}
                        <Link to="/signUp">Register</Link>
                      </h6>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
export default LogIn;
