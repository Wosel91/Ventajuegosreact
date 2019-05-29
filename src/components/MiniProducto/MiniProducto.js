/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MiniProducto.css';
import PropTypes from 'prop-types';

class MiniProducto extends Component {
  productoamostrar;

  constructor(props) {
    super(props);
    this.state = {
      productoamostrar: props.item,
    };
    // console.log(props.item);
  }

  render() {
    const { productoamostrar } = this.state;
    return (
      <div>
        <div className="card m-1" style={{ width: '7rem' }}>
          <Link to={`/producto/${productoamostrar._id}`}>
            <img
              className="card-img-top"
              src={`${productoamostrar.imgportada}`}
              alt="imagen juego"
              title={`${productoamostrar.name}`}
            />
          </Link>
          <div className=" mx-auto text-center">
            <small className="">{productoamostrar.releasedate}</small>
          </div>
        </div>
        <div className="col-md-12 mx-auto">
          <Link to={`/producto/${productoamostrar._id}`} className="button" rel="nofollow">
            Comprar
          </Link>
        </div>
      </div>
    );
  }
}
MiniProducto.propTypes = {
  item: PropTypes.object,
};
export default MiniProducto;
