import React from 'react';
import { Link } from 'react-router-dom'
import './LogoBar.css'

export const LogoBar = () => {

    return (
        <div className="row justify-content-between" id="rowlogo">
            <div className="col-md-6 ">
                <Link to="/"><img src={require('../../assets/img/mario.png')} className="rounded float-left" alt="logo" id="mainlogo" /></Link><h1>VentaJuegos</h1>
            </div>
            <div className="col-md-4 align-middle">
                <div className="form-inline my-2 my-lg-0 float-right align-middle">
                    <input id="barrabusqueda" className="form-control mr-sm-2 align-middle" type="search" placeholder="Search" aria-label="Search" onChange={busqueda} />
                </div>
            </div>
        </div>
    )
    function busqueda() {
        // --------------
        // lanzar evento de busqueda
        console.log(document.getElementById('barrabusqueda').value)
    }

}





