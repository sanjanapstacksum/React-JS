import React, { useState } from "react";
import "../components/contact.css";
import Swal from "sweetalert2";
const initialData = {
  email: "",
  password: "",
  message: "",
};

const Contact = () => {
  const [user, setUser] = useState(initialData);
  const [errors, setErrors] = useState({ ...initialData });
  const [regEx, setRegEx] = useState({ ...initialData });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors(initialData);

    var isValid = true;
    if (!user.password || !user.message || !user.email) {
      setErrors({
        email: !user.email ? "Please Enter email" : "",
        message: !user.message ? "Please Enter  Message" : "",
        password: !user.password ? "Please Enter password" : "",
      });
      isValid = false;
    }
    if (
      (!validEmail.test(user.email) && user.email !== "") ||
      (!validPassword.test(user.password) && user.password !== "")
    ) {
      setRegEx({
        email: !validEmail.test(user.email) ? "Please Enter correct Email" : "",
        password: !validPassword.test(user.password)
          ? "Please Enter correct Password"
          : "",
      });
      isValid = false;
    }

    if (isValid) {
      Swal.fire({
        html: "<h4>Submitted Successfully,Thank You :)<h4>",
        icon: "success",
      });

      setUser(initialData);
      setRegEx(initialData);
    }
  };
  return (
    <div className="container ">
      <div
        className="card shadow"
        style={{
          width: " 50%",

          alignItems: "center",
          margin: "0px auto",

          marginTop: "5%",
        }}
      >
        <div className="container">
          <div className="py-4">
            <h2>How Can I Help You?</h2>
            <form className="container" onSubmit={onSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={onInputChange}
                />
                <span style={{ color: "red" }}>{errors?.email}</span>
                <span style={{ color: "red" }}>{regEx?.email}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={onInputChange}
                />
                <span style={{ color: "red" }}>{errors?.password}</span>
                <span style={{ color: "red" }}>{regEx?.password}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Message</label>
                <textarea
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Type something.."
                  rows="4"
                  cols="50"
                  name="message"
                  value={user.message}
                  onChange={onInputChange}
                />
                <span style={{ color: "red" }}>{errors?.message}</span>
              </div>

              
              <br />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
