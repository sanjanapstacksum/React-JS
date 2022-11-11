import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash,faEdit, faUsersViewfinder, faEye } from '@fortawesome/free-solid-svg-icons'

import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  console.log(users);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/users");
    setUsers(result.data);
    console.log(result.data);
  };
  const deleteUser = id=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger mr-2',
       margin:"10px"
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: `Delete `, 
      cancelButtonText: ' Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
    
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your data has been deleted.',
          'success'
          
        )
     axios.delete(`http://localhost:3004/users/${id}`)
        loadUsers();
        window.location.reload()
       
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        )
      }
    })
    
     

  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead
            className="thead-dark"
            style={{
              background: "#343a40",
              color: "white",
            }}
          >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    class="btn btn-primary mr-2"
                    style={{ marginRight: "3px" }} to={`/users/${user.id}`}
                  >
                   <FontAwesomeIcon icon={faEye} />
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    style={{ marginRight: "3px" }} to={`/users/edit/${user.id}`}
                  >
                     <FontAwesomeIcon icon={faEdit}style={{fontSize:"20px"}} />
                  
                  </Link>
                  <Link class="btn btn-danger" onClick={()=>deleteUser(user.id)} style={{ marginRight: "3px" }}>
                  <FontAwesomeIcon icon={faTrash} />
                 
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
