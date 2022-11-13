import './App.css';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutPage from './AboutPage.js';
import Navbar from './Navbar.js';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      </div>
    </Router>
    
  );
}

export default App;
