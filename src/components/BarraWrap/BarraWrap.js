import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './BarraWrap.css';
import { connect } from 'react-redux';
import Login from '../Login/Login';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class BarraWrap extends Component {
  constructor(props) {
    super(props);
    this.getCerrar = this.getCerrar.bind(this);
    this.state = {
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getCerrar() {
    this.closeModal();
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    document.getElementsByTagName('body')[0].style.overflow = '';
  }

  openModal() {
    this.setState({ modalIsOpen: true });
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  render() {
    const { modalIsOpen } = this.state;
    // eslint-disable-next-line react/prop-types
    const { auth } = this.props;
    return (
      <div>
        {auth.uid ? (
          <nav className="navbar navbar-expand-md" id="barrawrap">
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <Link className="nav-link" to="/MisPedidos">
                Mis pedidos
              </Link>
              <Link className="nav-link" to="/Configuracion">
                Configuracion
              </Link>
              <Link className="nav-link" to="/nuevoproducto">
                Nuevo producto
              </Link>
              <Link className="nav-link" to="/MisPedidos">
                Mis pedidos
              </Link>
              <Link className="nav-link" to="/carrito">
                Carrito
              </Link>
              <button type="button" className="link-button nav-link" onClick={this.autha.logout}>
                Salir
              </button>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-md" id="barrawrap">
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <button type="button" className="link-button nav-link" onClick={this.openModal}>
                login
              </button>
              <button type="button" className="link-button nav-link" onClick={this.openModal}>
                soporte
              </button>
              <Link className="nav-link" to="/RegistroCliente">
                Registrate
              </Link>
            </div>
          </nav>
        )}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login"
        >
          <Login cerrar={this.getCerrar} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(BarraWrap);
