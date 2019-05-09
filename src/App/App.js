import React, { Component } from 'react'
// import { Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {adminlayout} from '../Layouts/adminlayout'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path={'/'} exact component={adminlayout} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


