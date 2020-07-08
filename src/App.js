import React from 'react';
import { Component } from 'react';
import Login from './components/Login'
import HomePage from './components/HomePage'
import { Provider } from "react-redux"
import store from './store'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter >
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" exact component={Login} />
              <Route path="/Home" component={HomePage} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>

    );
  }

}

export default App;
