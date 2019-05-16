import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './MiniProducto.css'
export default class MiniProducto extends Component {
    constructor(props){
        super(props)
        this.state = {
            productoamostrar: props.item
          }
    }
    productoamostrar

    render(){

    return (
        <div>
            <div className="card m-1" style={{width : '7rem'}}>
                <Link to={`/producto/${this.state.productoamostrar._id}`}><img className="card-img-top"  src={`${this.state.productoamostrar.imgportada}`} alt="imagen juego" title={`${this.state.productoamostrar.name}`}/></Link>
                    <div className=" mx-auto text-center">
                        <small className="">{ this.state.productoamostrar.releasedate }</small>
                    </div>
         </div>
                <div className="col-md-12 mx-auto">
                <Link to={`/producto/${this.state.productoamostrar._id}`} className="button" rel="nofollow">Comprar</Link>
                </div>
            </div>
            )
           
        }
    }        
        
        
        
        
        
    