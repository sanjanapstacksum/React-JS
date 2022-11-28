import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      var data = await axios.get(
        " http://universities.hipolabs.com/search?country=United+States"
      );
      console.log(data.data);
      setUsers(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <table class="table table-striped" id="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">alpha</th>
              <th scope="col">country</th>
              <th scope="col">Domains </th>
              <th scope="col">web</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{user.name}</th>
                <td>{user.alpha_two_code}</td>
                <td>{user.country}</td>
                <td>{user.domains}</td>
                <td>{user.web_pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="/">Previous</a></li>
      <li class="page-item"><a class="page-link" href="/">1</a></li>
      <li class="page-item"><a class="page-link" href="/">2</a></li>
      <li class="page-item"><a class="page-link" href="/">3</a></li>
      <li class="page-item"><a class="page-link" href="/">Next</a></li>
    </ul>
  </nav> */}
    </div>
  );
}

export default App;
