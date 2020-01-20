import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import EvenOddApp from './even-odd/EvenOddApp';
import ToDoApp from './to-do/ToDoApp';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar bg-dark">
          <Link className="nav-link" to="/even">
            Even-Odd
          </Link>
          <Link className="nav-link" to="/">
            To-Do(s)
          </Link>
        </nav>

        <Switch>
          <Route path="/even">
            <EvenOddApp />
          </Route>
          <Route path="/">
            <ToDoApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
