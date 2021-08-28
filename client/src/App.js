
import './App.css';
import LoginButton from './components/LoginButton';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Survey from './components/Survey';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/surveys" component={Dashboard} />
            <Route exact path="/survey/new" component={Survey} />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
