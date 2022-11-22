import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

import blueLogo from '../Components/Images/blueLogo.png'
import cart from '../Components/Images/cart.png'
import user from '../Components/Images/user.png'

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light " style={{height:"55px",background:"orange"}}>
    <Link class="navbar-brand" to="/"> <img className="logo" src={blueLogo} style= {{width:"55px"}}alt="Logo" /></Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/" >Home </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/signUp" >Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login" >Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"><img className="cart" src={cart} style= {{width:"33px"}}alt="Logo" /></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"><img className="cart" src={user} style= {{width:"33px"}}alt="Logo" /></Link>
        </li>
      </ul>
     
    </div>
  </nav>
  )
}

export default Nav