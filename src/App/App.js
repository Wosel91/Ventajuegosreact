import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {adminlayout} from '../Layouts/adminlayout'
import { izquierdalayout } from '../Layouts/izquierdalayout';
import { nadalayout } from '../Layouts/nadalayout';
import { restringidolayout } from '../Layouts/restringidolayout';
import { portadalayout } from '../Layouts/portadalayout';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path={'/'} exact component={adminlayout} />
              <Route path={'/1'} exact component={izquierdalayout} />
              <Route path={'/2'} exact component={nadalayout} />
              <Route path={'/3'} exact component={restringidolayout} />
              <Route path={'/4'} exact component={portadalayout} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}


