import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import SingleProduct from './components/SingleProduct';
import NotFound from './components/NotFound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/shop/:id" component={SingleProduct} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
