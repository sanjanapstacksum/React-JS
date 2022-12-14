import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Profile from "./Components/Profile";

import PageNotFound from "./Components/PageNotFound";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
    
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/signUp" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile/>}/>
              <Route path="*" element={<PageNotFound />} />
         </Routes>
      </Router>
    );
 }

export default App;
