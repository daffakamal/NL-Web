import './App.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/About/AboutPage.js';
import Navbar from './components/Layout/Navbar.js';
import LandingPage from './components/Home/LandingPage.js';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
