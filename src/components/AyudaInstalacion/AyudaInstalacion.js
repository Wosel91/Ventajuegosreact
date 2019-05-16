import React from 'react';
import { Link } from 'react-router-dom'
import './AyudaInstalacion.css'

export const AyudaInstalacion = () => {

    return (
        <div className="modal fade" id="exampleModalLong" tabindex="1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body align-content-center">
                        <div className="fancybox-inner" ><link rel="stylesheet" href="/themes/igv1/modules/tutorials/tutorials.css"/>
                            <h2>Cómo activar tu juego en Steam</h2>
                            <div className="video-embed">
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/VJY0Ud1j_po" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <script src="https://player.vimeo.com/api/player.js"></script>
                            <div className="ig-tuto">
                                <p>
                                    <span>1.</span>Entra en <a href="http://store.steampowered.com/about/" target="_blank" rel="noopener noreferrer">http://store.steampowered.com/about/</a><br />
                                    <span>2.</span>Haz clic en «Instalar Steam».<br />
                                    <img src="https://s2.gaming-cdn.com/themes/igv1/modules/tutorials/images/ig-tutorials-steam-download2.png" /><br />
                                    <span>3.</span>Cuando el programa esté instalado y ejecutándose, inicia sesión con tu nombre de usuario y contraseña (o crea una nueva cuenta si no la tienes).<br />
                                    <img src="https://s2.gaming-cdn.com/themes/igv1/modules/tutorials/images/ig-tutorials-steam-login2.png" /><br />
                                    <span>4.</span>Una vez iniciada la sesión, haz clic en «+ Añadir un juego», abajo a la izquierda (o en el menú principal en la pestaña «Juegos»).<br />
                                    <span>5.</span>Selecciona «Activar un juego en Steam...».<br />
                                    <img src="https://s1.gaming-cdn.com/themes/igv1/modules/tutorials/images/ig-tutorials-steam-addgame2.png" /><br />
                                    <span>6.</span>Una pantalla te pedirá que valides la licencia. Acepta.<br />
                                    <span>7.</span>Una ventana te invitará a introducir el código que has comprado en Instant Gaming.<br />
                                    <img src="https://s1.gaming-cdn.com/themes/igv1/modules/tutorials/images/ig-tutorials-steam-activation2.png" /><br />
                                    <span>8.</span>Al cabo de unos minutos, Steam validará tu código.<br />
                                    <span>9.</span>Ahora el juego aparecerá en tu lista.<br />
                                    <span>10.</span>Haz clic a continuación para comenzar la descarga.<br /><br />
                                    Si deseas una ayuda más precisa o tienes alguna pregunta, no dudes en <a href="#" target="_blank">contactarnos</a>.
                                    </p>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}




