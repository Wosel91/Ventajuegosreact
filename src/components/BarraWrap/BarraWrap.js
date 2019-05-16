import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './BarraWrap.css'
import Login from '../Login/Login';
import auth from '../../Services/Auth/Auth'
import Modal from 'react-modal';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default class BarraWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: true,
            // isAuthenticated : this.props.auth.isAuthenticated
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }
    openModal() {
        this.setState({ modalIsOpen: true });
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.

    }

    closeModal() {
        this.setState({ modalIsOpen: false });
        document.getElementsByTagName('body')[0].style.overflow = "";
    }



    logout() {
        this.autha.logout()
    }
    getCerrar(event) {
        this.closeModal()
    }


    autha = new auth();

    render() {



        return (
            <div>

                {false ? (
                    <nav className="navbar navbar-expand-md" id="barrawrap" >
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation"></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <Link className="nav-link" to="/MisPedidos">Mis pedidos</Link>
                            <Link className="nav-link" to="/Configuracion">Configuracion</Link>
                            <Link className="nav-link" to="/nuevoproducto">Nuevo producto</Link>
                            <Link className="nav-link" to="/MisPedidos">Mis pedidos</Link>
                            <Link className="nav-link" to="/carrito">Carrito</Link>
                            <Link className="nav-link" onClick={this.autha.logout}>Salir</Link>
                        </div>
                    </nav>) :

                    (<nav className="navbar navbar-expand-md" id="barrawrap">
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation"></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <Link className="nav-link" onClick={this.openModal}>login</Link>
                            <Link className="nav-link" onClick={this.openModal} >soporte</Link>
                            <Link className="nav-link" to="/RegistroCliente" >Registrate</Link>
                        </div>
                    </nav>)}




                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Login"
                >

                    <Login cerrar={this.getCerrar.bind(this)} />

                </Modal>







            </div>
        )
    }

}











