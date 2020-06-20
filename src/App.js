import React from 'react';
import { Component } from 'react';
import Login from './components/Login'
import HomePage from './components/HomePage'
import ItemList from './components/ItemList'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/Home" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>


    );
  }

}

export default App;
