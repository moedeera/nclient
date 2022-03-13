import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

const fetchTest = async () => {
  var id = 2
 try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const string = `https://econnectsocial.herokuapp.com/api/users/profiles/${id}`;
    console.log(string, id);
    const res = await axios.get(string);
    console.log(res.data);
   
  } catch (error) {
    console.log(error);
  }



}
 
fetchTest()


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
