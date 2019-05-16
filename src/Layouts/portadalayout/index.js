import React, { Component } from 'react';
import { LogoBar } from '../../components/LogoBar/LogoBar'
import BarraWrap from '../../components/BarraWrap/BarraWrap';
import { Categorias } from '../../components/Categorias/Categorias';
import MainContenido from '../../components/MainContenido/MainContenido';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Banner } from '../../components/Banner/Banner';

export class portadalayout extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {

        return (
            <div>
                <LogoBar />
                <BarraWrap auth={this.props.auth} />
                <MDBContainer>
                    <MDBRow>
                        <Banner />
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="3">
                            <Categorias />
                            <img src={require('../../assets/img/redes.png')} className="rounded float-left" alt="logo" />
                        </MDBCol>
                        <MDBCol size="6">
                        <MainContenido/>
                        </MDBCol>
                        <MDBCol size="3">
                            <img src={require('../../assets/img/ofertas del dia.PNG')} className="rounded float-left" alt="logo" />
                            <img src={require('../../assets/img/ultimos comentarios.png')} className="rounded float-left" alt="logo" />

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}



