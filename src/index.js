import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Bag from './components/Bag';
import Shop from './components/Shop';
import NotFound from './components/NotFound';
import SingleProduct from './components/SingleProduct';
import ScrollToTop from './components/ScrollToTop';

const routing = (
  <Router>
    <>
      <NavBar />
      <ScrollToTop />
      <Switch>  
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/singleProduct" component={SingleProduct} />
        <Route path="/bag" component={Bag} />
        <Route component={NotFound} />
      </Switch>
    </>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
