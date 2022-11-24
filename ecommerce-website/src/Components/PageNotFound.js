import React from 'react';
import image from '../Components/Images/notF.gif'
import { Link } from 'react-router-dom';
import './PageNotFound.css'

function PageNotFound() {
  return (
    <>
  <img className='notFound' src={image} alt=""></img>
  <Link type="button" class="btn btn-primary" id="buttonHome" to="/">Back to home</Link>  
  </>
  )
}

export default PageNotFound