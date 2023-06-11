import React from 'react';

function Anuncios(props) {
    return (
      <div className="contenedor-anuncio border border-dark my-5 rounded">
            <img
                className='imagen-anuncio w-100'
                src={require(`../img/anuncios/anuncio-${props.imagen}.jpg`)}
                alt={props.descripcionImagen}
            />
            <div className='contenedor-mensaje my-2 mx-3'>
                <div className='contenedor-texto-anuncio w-100 mt-3'>
                    <p className='texto-anuncio'>{props.descripcion}</p>
                </div>
                <button className='btn btn-dark mt-3'>Ver anuncio</button>
            </div>
      </div>
    );
  }

  export default Anuncios;