import React from 'react';

function Subtitulo(props) {
  return (
    <div className="contenedor-subtitulo bg-dark text-white mt-2 d-flex align-items-center">
      <h1 className='my-0 py-2 px-4 fs-2'>{props.titulo}</h1>
     </div>
  );
}

export default Subtitulo;