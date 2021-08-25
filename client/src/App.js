import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Surveyr Dev</h1>
        <LoginButton />
      </header>
    </div>
  );
}

export default App;
