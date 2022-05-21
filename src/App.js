import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Homepage } from "./PortfolioPage/Homepage";

import { Mainpage } from "./projects/socialmedia/Pages/Main/Mainpage";
import { Login } from "./projects/socialmedia/login/Login";

import { Trending } from "./projects/socialmedia/Pages/Trending/Trending";
import { SocialMedia } from "./projects/socialmedia/SocialMedia";
import { Profiles } from "./projects/socialmedia/Profiles/Profiles";
import { PostPage } from "./projects/socialmedia/main/components/PostPage/PostPage";
import { Gallery } from "./projects/Gallery/Gallery";

import { ProfilePage } from "./projects/socialmedia/main/components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/PhotoBox" element={<Gallery />} />

          <Route path="socialmedia" element={<SocialMedia />}>
            <Route index element={<Mainpage />} />
            <Route path="login" element={<Login />} />
            <Route path="trending" element={<Trending />} />
            <Route path="friends" element={<Profiles />} />
            <Route path="posts" element={<PostPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
