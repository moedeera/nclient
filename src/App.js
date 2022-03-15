import "./index.css";
import axios from "axios";
import { Homepage } from "./projects/Homepage";

import { Mainpage } from "./projects/socialmedia/main/Mainpage";
import { Login } from "./projects/socialmedia/login/Login";
import { SocialMedia } from "./projects/socialmedia/SocialMedia";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const fetchTest = async () => {
    var id = 2;
    try {
      const string = `https://econnectsocial.herokuapp.com/api/users/profiles/${id}`;
      console.log(string, id);
      const res = await axios.get(string);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchTest();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="socialmedia" element={<SocialMedia />}>
            <Route index element={<Mainpage />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
