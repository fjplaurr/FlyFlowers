import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import NavBar from './components/NavBar';
import Empty from './components/Empty';
import NotFound from './containers/NotFound';
import SingleProduct from './components/SingleProduct';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import store from './redux/store';

const Bag = lazy(() => import('./containers/Bag'));
const Shop = lazy(() => import('./containers/Shop'));

const history = createBrowserHistory();
const routing = (
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <>
          <NavBar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/singleProduct/:id" component={SingleProduct} />
            <Route path="/bag" component={Bag} />
            <Route path="/empty" component={Empty} key="empty" />
            <Route component={NotFound} />
          </Switch>
          <div className="spacer" />
          <Footer />
        </>
      </Suspense>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));
