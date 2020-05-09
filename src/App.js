import React, { Component } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './interface/Navbar';
import Home from './interface/Home';
import Cart from './interface/Cart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    )
  }
}

export default App;