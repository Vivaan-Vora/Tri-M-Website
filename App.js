import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/AboutUs';
import About from './components/Contact';
import Join from './components/TheTeam';
import Calendar from './components/TheTeam';
import Team from './components/TheTeam';
import Contact from './components/TheTeam';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">About</Link>
            </li>
            <li>
              <Link to="/contact">Join</Link>
            </li>
            <li>
              <Link to="/contact">Calendar</Link>
            </li>
            <li>
              <Link to="/contact">Team</Link>
            </li>
            <li>     
            </li>
            <li>
              <Link to="/contact">Calendar</Link>  
            </li>
            <li>            
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/team">
            <TheTeam />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

