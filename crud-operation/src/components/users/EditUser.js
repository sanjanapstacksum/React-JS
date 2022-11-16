import React, { useState, useEffect } from "react";
import "../users/users.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const initialData = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

const EditUser = () => {
  let history = useNavigate();
  const [user, setUser] = useState(initialData);
  const [errors, setErrors] = useState({ ...initialData });
  const [regEx, setRegEx] = useState({ ...initialData });

  const { id } = useParams();

  const onLoad = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data);
  };
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validName = new RegExp("^[a-zA-Z ]{2,40}$");
  const validUserName = new RegExp("^[a-zA-Z ]{2,40}$");
  const validPhone = new RegExp("^[7-9][0-9]{9}$");
  const validWeb = new RegExp(
    "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"
  );

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    onLoad();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    var isValid = true;
    if (
      !user.name ||
      !user.username ||
      !user.email ||
      !user.phone ||
      !user.website
    ) {
      setErrors({
        name: !user.name ? "Please Enter name" : "",
        username: !user.username ? "Please Enter user name" : "",
        email: !user.email ? "Please Enter email" : "",
        phone: !user.phone ? "Please Enter phone" : "",
        website: !user.website ? "Please Enter website" : "",
      });
      isValid = false;
      console.log(errors);
    }
    if (
      (!validEmail.test(user.email) && user.email !== "") ||
      (!validName.test(user.name) && user.name !== "") ||
      (!validUserName.test(user.username) && user.username !== "") ||
      (!validPhone.test(user.phone) && user.phone !== "") ||
      (!validWeb.test(user.website) && user.website !== "")
    ) {
      setRegEx({
        phone: !validPhone.test(user.phone)
          ? "Please Enter correct Phone number"
          : "",
        email: !validEmail.test(user.email) ? "Please Enter correct Email" : "",
        name: !validName.test(user.name) ? "Please Enter correct name" : "",
        username: !validUserName.test(user.username)
          ? "Please Enter correct name"
          : "",
        website: !validWeb.test(user.website)
          ? "Please Enter correct website"
          : "",
      });
      isValid = false;
    }

    if (isValid) {
      history("/");
      Swal.fire({
        html: "<h4>Saved Successfully<h4>",
        icon: "success",
      });
      await axios.put(`http://localhost:3004/users/${id}`, user);
      

      user.name = "";
      user.email = "";
      user.username = "";
      user.phone = "";
      user.website = "";
    }
  };
  return (
    <div class="container-fluid">
      <div class="row" style={{ justifyContent: "center", marginTop: "50px" }}>
        <div class="col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <form name="frmCreateEdit" id="frmCreateEdit" onSubmit={onSubmit}>
                <div class="form-body">
                  <div class="row center">
                    <h2>Edit User</h2>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="control-label">Name</label>
                        <input
                          type="text"
                          id="first_name"
                          class="form-control saveData"
                          placeholder="Enter Your Name"
                          name="name"
                          value={user.name}
                          onChange={onInputChange}
                        />
                        <span style={{ color: "red" }}>{errors?.name}</span>
                        <span style={{ color: "red" }}>{regEx?.name}</span>
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
                          class="form-control saveData"
                          placeholder="Enter Username"
                          name="username"
                          value={user.username}
                          onChange={onInputChange}
                        />
                        <span style={{ color: "red" }}>{errors?.username}</span>
                        <span style={{ color: "red" }}>{regEx?.username}</span>
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
                          value={user.email}
                          id="email"
                          class="form-control saveData"
                          onChange={onInputChange}
                        />
                        <span style={{ color: "red" }}>{errors?.email}</span>
                        <span style={{ color: "red" }}>{regEx?.email}</span>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="control-label">Phone</label>
                        <input
                          type="text"
                          placeholder="Enter Your PhoneNumber"
                          name="phone"
                          value={user.phone}
                          id="email"
                          class="form-control saveData"
                          onChange={onInputChange}
                        />
                        <span style={{ color: "red" }}>{errors?.phone}</span>
                        <span style={{ color: "red" }}>{regEx?.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="control-label">Website</label>
                        <input
                          type="text"
                          placeholder="Enter Website"
                          name="website"
                          value={user.website}
                          id="password"
                          class="form-control saveData"
                          onChange={onInputChange}
                        />
                        <span style={{ color: "red" }}>{errors?.website}</span>
                        <span style={{ color: "red" }}>{regEx?.website}</span>
                      </div>
                    </div>
                  </div>

                  <br />
                  <div class="form-actions">
                    <button type="submit" class="btn btn-primary" id="save">
                      <i class="fa fa-check"></i> Edit User{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
