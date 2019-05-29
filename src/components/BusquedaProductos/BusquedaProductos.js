/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './BusquedaProductos.css';
import PropTypes from 'prop-types';
import Petrestfull from '../../Services/Petrestfull';
import MiniProducto from '../MiniProducto/MiniProducto';

class BusquedaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayJuegosBusqueda: [],
      Arraycategorias: [],
      ArrayPlataformas: [],
    };

    const servi = new Petrestfull();
    const sort = 'name';
    const categorias = [];
    const plataformas = [];
    // eslint-disable-next-line react/destructuring-assignment
    const { plataforma } = this.props.match.params;
    const parametrosabuscar = plataforma;
    servi.mostrarProductosbusqueda(parametrosabuscar, sort, categorias, plataformas)
      .then(response => {
        return response;
      })
      .then(data => {
        this.setState({
          ArrayJuegosBusqueda: data.data,
        });
      });
    servi.recuperarCategorias()
      .then(response => {
        return response;
      })
      .then(data => {
        this.setState({
          Arraycategorias: data.data,
        });
      });
    servi.recuperarPlataformas()
      .then(response => {
        return response;
      })
      .then(data => {
        this.setState({
          ArrayPlataformas: data.data,
        });
      });
  }


  render() {
    const { ArrayJuegosBusqueda, ArrayPlataformas, Arraycategorias } = this.state;
    // eslint-disable-next-line no-underscore-dangle
    const items = ArrayJuegosBusqueda.map(item => <MiniProducto item={item} key={item._id} />);
    const categoriasArr = Arraycategorias.map(categoria => <li><input type="checkbox" className="categorias" name="categorias" id={categoria.name} value={categoria.name} />{categoria.name}</li>);
    const plataformasArr = ArrayPlataformas.map(plataforma => <li><input type="checkbox" className="plataforma" name="plataforma" id={plataforma.name} value={plataforma.name} />{plataforma.name}</li>);

    return (
      <div className="content">
        <form id="miformbusqueda">
          <button type="submit" hidden id="submit" />

          <div className="row">
            <div className="col-md-3 aside">
              <div className="row">
                <div className="col-md-12">Plataforma</div>
              </div>
              <div className="row">
                <div className="col-md-12 naranja" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul>{plataformasArr}</ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">Categoria</div>
              </div>
              <div className="row">
                <div className="col-md-12 naranja" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul>{categoriasArr}</ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">Precio</div>
              </div>
              <div className="row">
                <div className="col-md-12 naranja" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    Entre{' '}
                    <input type="text" name="preciomin" id="preciomin" style={{ width: '35px' }} />€
                    € y{' '}
                    <input type="text" name="preciomax" id="preciomax" style={{ width: '50px' }} />€
                  </div>
                  <div className="row">
                    <input type="checkbox" name="sinprecio" id="sinprecio" value="sinprecio" />
                    Juegos sin precio aun
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">Ofertas en juego de:</div>
              <div className="row">
                <select id="ig-search-sortby" name="sort_by">
                  <option value="name" defaultValue>
                    Nombre ↑
                  </option>
                  <option value="-name">Nombre ↓</option>
                  <option value="preciofinal">Precio ↑</option>
                  <option value="-preciofinal">Precio ↓</option>
                  {/* <option value="reviews_avg_desc">Puntuaciones ↓</option>
                                        <option value="reviews_avg_asc">Puntuaciones ↑</option>  */}
                  <option value="discount">Descuento ↑</option>
                  <option value="-discount">Descuento ↓</option>
                  <option value="releasedate">Fecha de lanzamiento ↑</option>
                  <option value="-releasedate">Fecha de lanzamiento ↓</option>
                </select>
              </div>
              <div className="row">
                <div className="container fondoblanco ">
                  <div className="row justify-content-between">a{items}</div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

BusquedaProductos.propTypes = {
  match: PropTypes.object,
  plataforma: PropTypes.object,
};
export default BusquedaProductos;
