import React, {Component} from 'react';
import './PanelJuegoInfoInferior.css'


export default class PanelJuegoInfoInferior extends Component {
    constructor(props) {
        super(props)

        console.log(props)
        this.state = {
            miProducto: ""
        }
    }

    componentWillReceiveProps(){
        this.setState({
            miProducto: this.props.miProducto
        })
    }

    render(){

    
    return (
        <div className="row">
            <div className="col-md-12">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Informacion</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Comentarios</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Puntuacion de usuarios</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" id="videoYoutube" allowFullScreen title="youtube"></iframe>
                        </div>
                        <div className="row">
                            <p className="text-justify p-1">{this.state.miProducto.description}</p>
                            <br />
                        </div>
                        <div className="row">
                            <p>fecha de lanzamiento</p>
                            <p>{this.state.miProducto.releasedate}</p>
                        </div>
                        <div className="row">
                            ahora hay 766 personas jugando a este juego en Steam
                    </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5>Configuracion minima</h5>
                                <ul>
                                    <li><span>OS: {this.state.miProducto.ConfiguracionminimaOS}</span></li>
                                    <li><span>Processor: {this.state.miProducto.ConfiguracionminimaCPU}</span></li>
                                    <li><span>Memory: {this.state.miProducto.ConfiguracionminimaRAM}</span></li>
                                    <li><span>Graphics: {this.state.miProducto.ConfiguracionminimaGPU}</span></li>
                                    <li><span>Storage: {this.state.miProducto.ConfiguracionminimaHDD}</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5>Configuracion recomendada</h5>
                                <ul>
                                    <li><span>OS:{this.state.miProducto.ConfiguracionrecomendadaOS}</span></li>
                                    <li><span>Processor: {this.state.miProducto.ConfiguracionrecomendadaCPU}</span></li>
                                    <li><span>Memory: {this.state.miProducto.ConfiguracionrecomendadaRAM}</span></li>
                                    <li><span>Graphics: {this.state.miProducto.ConfiguracionrecomendadaGPU}</span></li>
                                    <li><span>Storage: {this.state.miProducto.ConfiguracionrecomendadaHDD}</span></li>
                                </ul>
                            </div>
                        </div>
                        <small>*Los tags y los requisitos están incluidos solo con fines informativos</small>
                        <div className="card text-center" >
                            <div className="card-body ">
                                <div className="col-md-6 text-center mx-auto">
                                    <a href="*" rel="nofollow" className="botonCompra" data-toggle="modal" data-target="#exampleModalLong">Como activar un juego para Steam</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="../../../../assets/img/cara1.jpg" alt="cara1" className="img-thumbnail" />
                                            </div>
                                            <div className="col-md-8">
                                                <p className="card-text">Increible</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="../../../../assets/img/cara2.jpg" alt="cara1" className="img-thumbnail" />
                                            </div>
                                            <div className="col-md-8">
                                                <p className="card-text">Que mierda</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="../../../../assets/img/cara5.jpg" alt="cara1" className="img-thumbnail" />
                                            </div>
                                            <div className="col-md-8">
                                                <p className="card-text">Juegazo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="../../../../assets/img/cara4.jpg" alt="cara1" className="img-thumbnail" />
                                            </div>
                                            <div className="col-md-8">
                                                <p className="card-text">No me ha lelgado el codigo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="../../../../assets/img/cara6.jpg" alt="cara1" className="img-thumbnail" />
                                            </div>
                                            <div className="col-md-8">
                                                <p className="card-text">Todo perfecto</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="../../../../assets/img/cara1.jpg" alt="cara1" className="img-thumbnail" />
                                            </div>
                                            <div className="col-md-8">
                                                <p className="card-text">10</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card m-1">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img src="../../../../assets/img/cara2.jpg" alt="cara1" className="img-thumbnail" />
                                            </div>
                                            <div className="col-md-8">
                                                <p className="card-text">3</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}