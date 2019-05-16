import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import auth from '../../Services/Auth/Auth'

export default class Login extends Component {

    render() {

        const autha = new auth();
        return (
            <div>
                <div className="modal-header text-center fondo-naranja">
                    <h2 className="card-title blanco">Crea tu cuenta en IG para continuar</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="botoncerrar" onClick={() => { this.props.cerrar() }}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-5 p-7 margenlogin" >
                            <h2 className="card-title text-center naranja">Conectarse con</h2>
                            <div className="div text-center">
                                <Link >facebook</Link>
                                <br></br>
                                <Link onClick={autha.login} >google</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}