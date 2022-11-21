
import './App.css';
import Nav from './Components/Nav';
import LogIn from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SignUp from './Components/Sign-up';

function App() {
  return (
    <Router>
      <div className="App">  
        <Nav />
        <Routes>
          <Route  path="/login" element={<LogIn/>} />
          <Route  path="/signUp" element={<SignUp/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
