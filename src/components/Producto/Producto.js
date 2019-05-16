import React, { Component } from 'react';
import PanelJuegoInfoInferior from '../PanelJuegoInfoInferior/PanelJuegoInfoInferior'


export default class Producto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            miProducto: ""
        }
    }

    
    componentWillMount() {
 

        fetch('http://localhost:3000/api/apiProductos/mostrarProductos/' + this.props.match.params._id)
            .then((response) => {
                return response.json()
            })
            .then((recurso) => {
                console.log(recurso);
                this.setState({
                    miProducto: this.añadirPrecioFinal(recurso)
                })
            })
    }

    añadirPrecioFinal(miProducto){
        miProducto.preciofinal=parseFloat((miProducto.price * ((100-miProducto.discount)/100)).toFixed(2));
        return miProducto
    }
    addProduct(juego) {
        // console.log(juego)
    }

    render() {
        return (
            //   <div>a</div>



            <div className="container" id="producto">
                <div className="row">
                    <div className="col-md-4">
                        <img src={`${this.state.miProducto.imgportada}`} className="imagenportada" alt="imgportada" />
                    </div>
                    <div className="col-md-8">
                        <div className="card text-center tarjetajuego fondonegro">
                            <div className="card-body text-center mt-10">
                                <h5 className="card-title blanco ">{this.state.miProducto.name}</h5>
                            </div>
                        </div>
                        <div className="card text-center tarjetajuego fondogris">
                            <div className="card-body text-center">
                                <div className="col-md-12">
                                    {this.state.miProducto.platform}
                                </div>
                                <div className="col-md-12">
                                    {this.state.miProducto.estado}
                                </div>
                                <div className="col-md-12">
                                    instantdownload |  {this.state.miProducto.instantdownload}
                                </div>
                            </div>
                        </div>
                        <div className="card text-center tarjetajuego fondoblanco" >
                            <div className="card-body text-center">
                                <div className="row">
                                    <div className="col-md-6">
                                        15 usuarios en esta pagina
                                             </div>
                                    <div className="col-md-6">
                                        7 juegos a este precio
                                             </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        Plataformas | {this.state.miProducto.platform}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        idiomas | {this.state.miProducto.languajes}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        Categorias  | {this.state.miProducto.categoria}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card text-center tarjetajuego fondonegro">
                            <div className="card-body text-center">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <small className="gris blanco">de venta al publico: {this.state.miProducto.price}</small>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-5 blanco">
                                                <h3>-{this.state.miProducto.discount}%</h3>
                                            </div>
                                            <div className="col-md-7 blanco">
                                                <h1>{this.state.miProducto.preciofinal}€</h1>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        {/* <a href onClick={`addProduct(${this.state.miProducto})`} className="botonCompra">comprar</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PanelJuegoInfoInferior miProducto={(this.state.miProducto)}/>
                







            </div>
        )
    }

}