import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Bag from './components/Bag';
import Shop from './components/Shop';
import Empty from './components/Empty';
import NotFound from './components/NotFound';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const routing = (
  <Provider store={store}>
    <HashRouter history={history} basename={process.env.PUBLIC_URL}>
      <>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            path="/shop"
            component={Shop}
          />
          <Route
            path="/singleProduct/:id"
            component={SingleProduct}
          />
          <Route
            path="/bag"
            component={Bag}
          />
          <Route
            path="/empty"
            component={Empty}
            key="empty"
          />
          <Route component={NotFound} />
        </Switch>
        <div className="spacer" />
        <Footer />
      </>
    </HashRouter >
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
