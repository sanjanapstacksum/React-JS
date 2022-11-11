import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/Contact";
import Navbar from "./components/Layout/navbar";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUsers from "./components/users/AddUsers";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/users/add" element={<AddUsers/>}/>
          <Route  path="/users/edit/:id" element={<EditUser/>}/>
          <Route  path="/users/:id" element={<User/>}/>
          <Route  path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
