import React ,{useState}from "react";
import "../users/users.css";

import axios from "axios";
import Swal from "sweetalert2";

const initialData = {
  name:"",
  username:"",
  email:"",
  phone:"",
  website:""
}

const AddUsers = () => {
   
    const[user,setUser]=useState(initialData)
    const [errors, setErrors] = useState({...initialData});
    const[regEx ,setRegEx] = useState({...initialData})
   
    const onInputChange = (e)=>{
      setUser({...user,[e.target.name]:e.target.value});
    }
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')
    const validName  = new RegExp('^[a-zA-Z ]{2,40}$')
    const validUserName  = new RegExp('^[a-zA-Z ]{2,40}$')
    const validPhone = new RegExp('^[7-9][0-9]{9}$')
    const validWeb = new RegExp('((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)')
    const onSubmit =async (e)=>{
  e.preventDefault()
  setErrors(initialData);
  

  var isValid = true;
    if((!user.name || !user.username || !user.email || !user.phone  || !user.website) )
    {
      
        setErrors({name : !user.name ? "Please Enter name" : "",username: !user.username ? "Please Enter user name" : '', email: !user.email ? "Please Enter email" : '', phone: !user.phone ? "Please Enter phone" : '', website: !user.website ? "Please Enter website" : '' })
        isValid = false
        console.log(errors.name)
       
    }
    if (((!validEmail.test(user.email) && user.email!=="") || (!validName.test(user.name) && user.name!=="")||(!validUserName.test(user.username) && user.username!=="")||(!validPhone.test(user.phone) && user.phone!=="")||(!validWeb.test(user.website) && user.website!==""))) {
    setRegEx({phone : !validPhone.test(user.phone)? "Please Enter correct Phone number" : "",email : !validEmail.test(user.email)? "Please Enter correct Email" : "",name : !validName.test(user.name)? "Please Enter correct name" : "",username : !validUserName.test(user.username)? "Please Enter correct name" : "",website : !validWeb.test(user.website)? "Please Enter correct website" : ""})
    isValid =false;
    }
    // if (!validName.test(user.name) && user.name!=="") {
    //   setRegEx({name : !validName.test(user.name)? "Please Enter correct name" : ""})
    //   isValid =false;
    //   }
   
    if ( isValid) {
     
Swal.fire({
  
  html: "<h4>Data added Successfully<h4>",
  icon: 'success'
})
  await axios.post("http://localhost:3004/users",user)
  

  setUser(initialData)
  setRegEx(initialData)
   
    }
  }
  return (
    <div class="container-fluid">
      <div class="row" style={{ justifyContent: "center", marginTop: "50px" }}>
        <div class="col-lg-6">
          <div class="card shadow">
            <div class="card-body">
              <form name="frmCreateEdit" id="frmCreateEdit" onSubmit={onSubmit}>
                <div class="form-body">
                  <div class="row center">
                    <h2>Add User</h2>
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
                          name ="username"
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
                          type="number"
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
                      <i class="fa fa-check"></i> Add User{" "}
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

export default AddUsers;
