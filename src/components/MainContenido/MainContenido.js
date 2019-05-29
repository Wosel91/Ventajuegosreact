/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import MiniProducto from '../MiniProducto/MiniProducto';
import Petrestfull from '../../Services/Petrestfull';
import ofertas from '../../assets/img/ofertas del dia.PNG';
import Categorias from '../Categorias/Categorias';
import comentarios from '../../assets/img/ultimos comentarios.png';
import redes from '../../assets/img/redes.png';

export default class MainContenido extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayJuegosPortada: [],
    };
  }

  componentWillMount() {
    const a = new Petrestfull();
    a.mostrarProductosmain()
      .then(response => {
        return response.json();
      })
      .then(recurso => {
        this.setState({
          ArrayJuegosPortada: recurso,
        });
      });
  }

  render() {
    const { ArrayJuegosPortada } = this.state;
    const items = ArrayJuegosPortada.map(item => <MiniProducto item={item} key={item._id} />);
    return (
      <MDBRow>
        <MDBCol size="3">
          <Categorias />
          <img src={redes} className="rounded float-left" alt="logo" />
        </MDBCol>
        <MDBCol size="6">
          <div className="container fondoblanco ">
            <div className="row justify-content-between">{items}</div>
          </div>
        </MDBCol>
        <MDBCol size="3">
          <img src={ofertas} className="rounded float-left" alt="logo" />
          <img src={comentarios} className="rounded float-left" alt="logo" />
        </MDBCol>
      </MDBRow>
    );
  }
}
