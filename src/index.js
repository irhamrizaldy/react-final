import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import Dashboard from './components/Dashboard';
import Report from './interface/Report';
import Cart from './interface/Cart';
import Home from './interface/Home';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/home/:id' component={Home} />
      <Route path='/cart' component={Cart} />
      <Route path='/report' component={Report} />
      <Route path='/edit/:id' component={Edit} />
      <Route path='/create' component={Create} />
      <Route path='/show/:id' component={Show} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
