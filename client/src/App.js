import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { WelcomePage } from "./pages/WelcomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Link to="/welcome">Welcome</Link>
        </Router>
        <a href="/auth/google">Sign In with Google</a>
      </header>
    </div>
  );
}

export default App;

function welcomePage() {
  return {WelcomePage};
}

