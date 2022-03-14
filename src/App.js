import "./index.css";
import axios from "axios";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";

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
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
