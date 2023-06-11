
import React, {useState, useEffect} from "react";
import axios from 'axios';

export const Actualizar = () => {

    //Actualizar libro
    const [actualizarLibro, setactualizarLibro] = useState({
        titulo: '',
        precio: '',
        categoria: '',
        autor: '',
        resumen: '',
        imagen: ''
    });

    useEffect(() => {
        setactualizarLibro(JSON.parse(localStorage.getItem('idActualizarLibro')));
    }, []);

    const manejarInputs = (e) => {
        e.persist();
        setactualizarLibro({...actualizarLibro, [e.target.name]: e.target.value});
    }

    function guardarCambios(e){

        e.preventDefault();

        const libroActualizado = {
            titulo: actualizarLibro.titulo,
            precio: actualizarLibro.precio,
            categoria: actualizarLibro.categoria,
            autor: actualizarLibro.autor,
            resumen: actualizarLibro.resumen,
            imagen: actualizarLibro.img_url
        }

        setTimeout(async () => {
            window.location.href="/leer";
        }, 200);

        setTimeout(async () => {
            axios.put(`http://127.0.0.1:8000/api/libro/${actualizarLibro.id_libros}`, libroActualizado);
        }, 100);
    }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form className="border border-dark rounded registro width-form" onSubmit={guardarCambios}>
                <h1 className="text-center mt-3 text-uppercase fs-2">Actualizar datos</h1>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="nombre" className="form-label fs-5">Titulo:</label>
                    <input type="text" id="nombre" name="titulo" className="form-control" value={actualizarLibro.titulo} onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="precio" className="form-label fs-5">Precio:</label>
                    <input type="text" id="precio" name="precio" className="form-control" value={actualizarLibro.precio} onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="categoria" className="form-label fs-5">categoria:</label>
                    <input type="text" id="categoria" name="categoria" className="form-control" value={actualizarLibro.categoria} onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="autor" className="form-label fs-5">Autor:</label>
                    <input type="text" id="autor" name="autor" className="form-control" value={actualizarLibro.autor} onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="descripcion" className="form-label fs-5">Descripción:</label>
                    <textarea id="descripcion" name="resumen" className="form-control" rows="6" value={actualizarLibro.resumen} onChange={manejarInputs}></textarea>
                </div>
                <div className="form-group mb-5 mx-4">
                    <label htmlFor="image" className="form-label fs-5">Imagen:</label>
                    <input type="file" id="image" name="image" className="form-control" accept="image/png, image/jpeg" onChange={manejarInputs}/>
                </div>
                <div className="form-group text-center">
                    <input type="submit" value="Actualizar" className="btn btn-primary mb-3 w-50 fs-5" />
                </div>
            </form>
        </div>
    );
};