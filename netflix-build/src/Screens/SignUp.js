import React,{useRef} from "react";
import "./SignUp.css";
import { auth } from "../firebase";
import {  useNavigate } from "react-router-dom";


function SignUpScreen() {
  const nevigate = useNavigate()
    const emailReference = useRef(null);
    const passwordReference = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword( emailReference.current.value,
        passwordReference.current.value
    ).then((authUser)=>{
       nevigate("/")

    }).catch((error)=>{
        alert(error.message)
    })
    console.log(emailReference.current.value)
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
        emailReference.current.value,
        passwordReference.current.value
    ).then((authUser)=>{
        console.log(authUser)

    }).catch((error)=>{
        alert(error.message)
    })
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailReference}type="email" placeholder="Email" />
        <input ref={passwordReference}type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={register}> Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
