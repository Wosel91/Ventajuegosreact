/* eslint-disable class-methods-use-this */
import axios from 'axios';

export default class Petrestfull {
  // -----------PRODUCTOS ---------------------------------------------
  mostrarProductosmain() {
    return fetch('http://localhost:3000/api/apiProductos/mostrarProductosmain');
  }

  mostrarProductosbusqueda(parametrosabuscar, sort, categorias, plataformas) {
    const body = {
      parametrosabuscar,
      sort,
      categorias,
      plataformas,
    };
    return axios.post('http://localhost:3000/api/apiProductos/mostrarproductosbusqueda', body);
  }
  // /-------------------------categorias y plataformas---------------

  recuperarCategorias() {
    return axios.get('http://localhost:3000/api/apiPortal/recuperarCategorias');
  }

  recuperarPlataformas() {
    return axios.get('http://localhost:3000/api/apiPortal/recuperarPlataformas');
  }
}
