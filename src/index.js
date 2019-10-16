import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import NotFound from './components/NotFound';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <ul className="topNav">
        <li>
          <NavLink
            exact activeClassName="active"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="/first"
          >
            First
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to="/second"
          >
            Second
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/first" component={FirstComponent} />
        <Route path="/second" component={SecondComponent} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
