import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import PrivateRoute from '../Routes/PrivateRoute';
import history from '../history';
import Producto from '../components/Producto/Producto';
import BusquedaProductos from '../components/BusquedaProductos/BusquedaProductos';
import LogoBar from '../components/LogoBar/LogoBar';
import BarraWrap from '../components/BarraWrap/BarraWrap';
import MainContenido from '../components/MainContenido/MainContenido';
import Banner from '../components/Banner/Banner';

const App = () => {
  return (
    <Router history={history}>
      <LogoBar />
      <BarraWrap />
      <MDBContainer>
        <MDBRow>
          <Banner />
        </MDBRow>
        <MDBRow>
          <MDBCol size="12">
            <Switch>
              <Route exact path="/" component={MainContenido} />
              <Route path="/producto/:_id" component={Producto} />
              <Route path="/busquedas/plataforma/:plataforma" component={BusquedaProductos} />
              <Route path="/busquedas/plataforma/" component={BusquedaProductos} />
              <PrivateRoute exact path="/2" component={Producto} />
            </Switch>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Router>
  );
};
export default App;
