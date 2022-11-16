import React from "react";
import './Login.css'

function Login(){
return(
    <div className="loginScreen">
        <div className="loginScreen_background">
            <img className="loginScreen__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""></img>
            <button className="loginScreen__button">Sign In</button>
            <div className="loginScreen__gradient"/>
        </div>
        <div className="loginScreen__body">
            <>
            <h1>Unlimited films, Tv programms and more.</h1>
            <h2>Watch anywhere.Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen_input">
                <form>
                    <input type="email" placeholder="Enter Email Address"/>
                    <button className="loginScreen__getStarted">GET STARTED</button>
                </form>
            </div>

            </>

        </div>
    </div>
)
}
export default Login;