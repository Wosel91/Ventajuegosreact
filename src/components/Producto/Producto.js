/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './Producto.css';
import Categorias from '../Categorias/Categorias';
import comentarios from '../../assets/img/ultimos comentarios.png';
import redes from '../../assets/img/redes.png';

class Producto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miProducto: ' ',
    };

    const { match } = this.props;
    fetch(`http://localhost:3000/api/apiProductos/mostrarProductos/${match.params._id}`)
      .then(response => {
        return response.json();
      })
      .then(recurso => {
        this.setState({
          miProducto: this.añadirPrecioFinal(recurso),
        });
      });
  }

  // eslint-disable-next-line class-methods-use-this
  añadirPrecioFinal(miProductofinal) {
    miProductofinal.preciofinal = parseFloat(
      (miProductofinal.price * ((100 - miProductofinal.discount) / 100)).toFixed(2),
    );
    return miProductofinal;
  }

  render() {
    const { miProducto } = this.state;

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="3">
            <Categorias />
            <img src={redes} className="rounded float-left" alt="logo" />
            <img src={comentarios} className="rounded float-left" alt="logo" />
          </MDBCol>
          <MDBCol size="9" id="producto">
            <div className="row">
              <div className="col-md-4">
                <img src={`${miProducto.imgportada}`} className="imagenportada" alt="imgportada" />
              </div>
              <div className="col-md-8">
                <div className="card text-center tarjetajuego fondonegro">
                  <div className="card-body text-center mt-10">
                    <h5 className="card-title blanco ">{miProducto.name}</h5>
                  </div>
                </div>
                <div className="card text-center tarjetajuego fondogris">
                  <div className="card-body text-center">
                    <div className="col-md-12">{miProducto.platform}</div>
                    <div className="col-md-12">{miProducto.estado}</div>
                    <div className="col-md-12">instantdownload | {miProducto.instantdownload}</div>
                  </div>
                </div>
                <div className="card text-center tarjetajuego fondoblanco">
                  <div className="card-body text-center">
                    <div className="row">
                      <div className="col-md-6">15 usuarios en esta pagina</div>
                      <div className="col-md-6">7 juegos a este precio</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">Plataformas | {miProducto.platform}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">idiomas | {miProducto.languajes}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">Categorias | {miProducto.categoria}</div>
                    </div>
                  </div>
                </div>
                <div className="card text-center tarjetajuego fondonegro">
                  <div className="card-body text-center">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <small className="gris blanco">
                            de venta al publico: {miProducto.price}
                          </small>
                        </div>
                        <div className="row">
                          <div className="col-md-5 blanco">
                            <h3>-{miProducto.discount}%</h3>
                          </div>
                          <div className="col-md-7 blanco">
                            <h1>{miProducto.preciofinal}€</h1>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <a href onClick={`addProduct(${miProducto})`} className="botonCompra">
                          comprar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    id="videoYoutube"
                    allowFullScreen
                    title="youtube"
                    src={miProducto.youtubeurl}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <p className="text-justify p-1">{miProducto.description}</p>
              <br />
            </div>
            <div className="row">
              <p>fecha de lanzamiento</p>
              <p>{miProducto.releasedate}</p>
            </div>
            <div className="row">ahora hay 766 personas jugando a este juego en Steam</div>
            <div className="row">
              <div className="col-md-12">
                <h5>Configuracion minima</h5>
                <ul>
                  <li>
                    <span>OS: {miProducto.ConfiguracionminimaOS}</span>
                  </li>
                  <li>
                    <span>Processor: {miProducto.ConfiguracionminimaCPU}</span>
                  </li>
                  <li>
                    <span>Memory: {miProducto.ConfiguracionminimaRAM}</span>
                  </li>
                  <li>
                    <span>Graphics: {miProducto.ConfiguracionminimaGPU}</span>
                  </li>
                  <li>
                    <span>Storage: {miProducto.ConfiguracionminimaHDD}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row" id="inferior">
              <div className="col-md-12">
                <h5>Configuracion recomendada</h5>
                <ul>
                  <li>
                    <span>OS:{miProducto.ConfiguracionrecomendadaOS}</span>
                  </li>
                  <li>
                    <span>Processor: {miProducto.ConfiguracionrecomendadaCPU}</span>
                  </li>
                  <li>
                    <span>Memory: {miProducto.ConfiguracionrecomendadaRAM}</span>
                  </li>
                  <li>
                    <span>Graphics: {miProducto.ConfiguracionrecomendadaGPU}</span>
                  </li>
                  <li>
                    <span>Storage: {miProducto.ConfiguracionrecomendadaHDD}</span>
                  </li>
                </ul>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
Producto.propTypes = {
  match: PropTypes.object,
};
export default Producto;
