import './App.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/About/AboutPage.js';
import Navbar from './components/Layout/Navbar.js';
import LandingPage from './components/Home/LandingPage.js';
import MainDesc from './components/Home/MainDesc';


function App() {
  return (
    <Router>
      <div className="bg-red-NL">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <LandingPage />
            <MainDesc />
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
