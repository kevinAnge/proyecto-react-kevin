import React from 'react';
import Slider from "./slider/slider";
import Subtitulo from './subtitulos';
import Anuncios from './anuncios';

function Cuerpo() {

    return (
        <main>
            <section className='contenedor-slider'>
                <Slider />
            </section>
            <section className='contenedor-anuncios'>
                <Subtitulo 
                titulo="Anuncios"/>
                <div className='Anuncios-lista d-flex justify-content-around w-100'>
                    <Anuncios 
                    imagen="lectura"
                    descripcion="Promociona tus libros en Amazon con Amazon Ads. Ofrecemos soluciones sencillas y eficaces para que puedas impulsar las ventas de libros."
                    descripcionImagen="Imagen de un libro"/>
                    
                    <Anuncios 
                    imagen="museo"
                    descripcion="Campaña diseñada para el Museo de Arte Contemporáneo de Valladolid para diferentes soportes en prensa, revistas y publicidad exterior."
                    descripcionImagen="Imagen de un museo"/>

                    <Anuncios 
                    imagen="viaje"
                    descripcion="Encuentra ofertas en viajes baratos, vuelos, hoteles, vacaciones, cruceros, trenes, vuelo más hotel, circuitos, Paradores y más en Viajes."
                    descripcionImagen="Imagen de un anuncio de viajes"/>
                </div>
            </section>
            <section className='contenedor-marketing'>
                <Subtitulo 
                titulo="Ventajas de comprar libros online"/>
                <div className='Anuncios-lista w-100 my-5'>
                    <div className=' d-flex justify-content-center align-items-center mx-auto contenedor-descripcion'>
                        <img src={require('../img/aprender.jpg')} className='aprender-img' />
                        <ul className='aprender-lista ms-4'>
                            <li className='lista-ventajas mt-2 fs-5'>Ahorro de tiempo en la compra.</li>
                            <li className='lista-ventajas mt-2 fs-5'>Accesible en todas partes.</li>
                            <li className='lista-ventajas mt-2 fs-5'>Mayor comodidad al leer.</li>
                            <li className='lista-ventajas mt-2 fs-5'>Ayuda con el medio ambiente.</li>
                            <li className='lista-ventajas mt-2 fs-5'>Precios mas asequibles.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='contenedor-mensaje'>
                <Subtitulo 
                titulo="Somos el futuro"/>
                    <div className='mensaje'>
                    </div>
            </section>
        </main>
    );
  }

  export default Cuerpo;