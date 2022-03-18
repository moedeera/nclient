import "./index.css";

import { Homepage } from "./projects/Homepage";

import { Mainpage } from "./projects/socialmedia/main/Mainpage";
import { Login } from "./projects/socialmedia/login/Login";
import { Trending } from "./projects/socialmedia/Trending/Trending";
import { SocialMedia } from "./projects/socialmedia/SocialMedia";
import { Profiles } from "./projects/socialmedia/Profiles/Profiles";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="socialmedia" element={<SocialMedia />}>
            <Route index element={<Mainpage />} />
            <Route path="login" element={<Login />} />
            <Route path="trending" element={<Trending />} />
            <Route path="friends" element={<Profiles />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
