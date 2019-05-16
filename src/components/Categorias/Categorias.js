import React from 'react';
import { Link } from 'react-router-dom'
import './Categorias.css'

export const Categorias = () => {
    return (
    <div id="categorias" className="container">
        <div className="row">
            <div className="col-md-6">
                <Link className="nav-link" to="/busquedas/plataforma/Steam" id="product-menu-platform-steam"><div className="badge steam"></div>Steam</Link>
            </div>
            <div className="col-md-6">
                <Link className="nav-link" to="/busquedas/plataforma/Uplay" id="product-menu-platform-uplay"><div className="badge uplay"></div>Uplay</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <Link className="nav-link" to="/busquedas/plataforma/Origin" id="product-menu-platform-origin"><div className="badge origin"></div>Origin</Link>
            </div>
            <div className="col-md-6">
                <Link className="nav-link" to="/busquedas/plataforma/Battle.net" id="product-menu-platform-battle-net"><div className="badge battlenet"></div>Battle.net</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <Link className="nav-link" to="/busquedas/plataforma/Playstation" id="product-menu-platform-playstation"><div className="badge playstation"></div>PS4</Link>
            </div>
            <div className="col-md-6">
                <Link className="nav-link" to="/busquedas/plataforma/Xbox" id="product-menu-platform-xbox"><div className="badge xbox"></div>Xbox</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <Link className="nav-link ig-pm-morefilters-toggle" to="/busquedas/plataforma/Steam" id="product-menu-platform-others"><div className="badge others"></div>Otros</Link>
            </div>
        </div>
        <hr/>
        <div className="row" id="ig-pm-genrelinks">
            <ul>
                <li><Link to="/busquedas/categoria/FPS">FPS</Link></li>
                <li><Link to="/busquedas/categoria/MMO">MMO</Link></li>
                <li><Link to="/busquedas/categoria/Accion">Acción</Link></li>
                <li><Link to="/busquedas/categoria/Deporte">Deporte</Link></li>
                <li><Link to="/busquedas/categoria/Simulación">Simulación</Link></li>
                <li><Link to="/busquedas/categoria/Multijugador">Multijugador</Link></li>
                <li><Link to="/busquedas/categoria/FPS">Cooperación</Link></li>
                <li><Link to="/busquedas" className="ig-pm-morefilters-toggle">...</Link></li>
            </ul>
        </div>
    </div>
    )
}