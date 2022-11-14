import './App.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/About/AboutPage.js';
import Navbar from './components/Layout/Navbar.js';
import Home from './components/Home/Home.js';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/home">
            <Home />
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
