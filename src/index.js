import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import SecondComponent from './components/SecondComponent';
import NotFound from './components/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/second" component={SecondComponent} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
