import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Banner from "./Banner";
// import { auth } from "../Firebase";

function Home() {

  const GetCurrentUser = () =>{
    const[user,setUser] = useState("")
  }
  let getItem = localStorage.getItem("user-email");
  const navigate = useNavigate();

  useEffect(() => {
    if (!getItem) {
      navigate("/login");
    }
  }, [getItem]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      console.log(user,"user")
      toast.info(`welcome! ${user?.displayName} 🙏`, {
        className: 'toast-message'
    });
    }
    
  }, []);

  return (
    <>
      <Nav />
      <Banner/>
      <ToastContainer />
    </>
  );
}

export default Home;
