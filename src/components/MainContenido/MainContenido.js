import React, { Component } from 'react';
// import { MDBContainer, MDBRow } from 'mdbreact';
import MiniProducto from '../MiniProducto/MiniProducto'
import Petrestfull from '../../Services/Petrestfull'

export default class MainContenido extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ArrayJuegosPortada: []
        }
    }

    componentWillMount() {
        var a = new Petrestfull();
        a.mostrarProductosmain().then((response) => {
            return response.json()
        })
            .then((recurso) => {
                this.setState({
                    ArrayJuegosPortada: recurso
                })
            })
    }

    render() {
        var items = this.state.ArrayJuegosPortada.map((item) =>
            <MiniProducto item={item} key={item._id} />
        );
        return (
            <div className="container fondoblanco ">
                <div className="row justify-content-between">
                    {items}
                </div>
            </div>
        )
    }
}