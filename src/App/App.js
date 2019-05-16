import React, { Component } from 'react'
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { portadalayout } from '../Layouts/portadalayout/index';
import { izquierdalayout } from '../Layouts/izquierdalayout';
import { PrivateRoute } from '../Routes/PrivateRoute';
import Auth from '../Services/Auth/Auth'
import { history } from "../history";
import Producto from "../components/Producto/Producto"




const auth = new Auth();

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={'/'} auth={auth} component={portadalayout} />
          <Route path={'/producto/:_id'} auth={auth} component={Producto} />
          <PrivateRoute exact path={'/2'} auth={auth} component={izquierdalayout} />
        </Switch>
      </Router>
    )
  }
}


