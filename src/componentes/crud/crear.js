
import React, {useState} from "react";
import axios from 'axios';

export const Crear = () => {

    const [libroCreado, setLibroCreado] = useState({
        nombre: '',
        precio: '',
        categoria: '',
        autor: '',
        resumen: '',
        imagen: ''
    });

    const manejarInputs = (e) => {
        e.persist();
        setLibroCreado({...libroCreado, [e.target.name]: e.target.value});
    }

    function crearLibro(e){

        e.preventDefault();

        const enviarLibro = {
            nombre: libroCreado.nombre,
            precio: libroCreado.precio,
            categoria: libroCreado.categoria,
            autor: libroCreado.autor,
            resumen: libroCreado.resumen,
            imagen: libroCreado.img_url
        }

        setTimeout(async () => {
            window.location.href="/leer";
        }, 110);

        setTimeout(async () => {
            axios.post('http://127.0.0.1:8000/api/libro/crear', enviarLibro);
        }, 100);
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form className="border border-dark rounded registro width-form" onSubmit={crearLibro}>
                <h1 className="text-center mt-3 text-uppercase fs-2">Crear nuevo libro</h1>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="nombre" className="form-label fs-5">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" className="form-control" onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="precio" className="form-label fs-5">Precio:</label>
                    <input type="text" id="precio" name="precio" className="form-control" onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="categoria" className="form-label fs-5">categoria:</label>
                    <input type="text" id="categoria" name="categoria" className="form-control" onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="autor" className="form-label fs-5">Autor:</label>
                    <input type="text" id="autor" name="autor" className="form-control" onChange={manejarInputs}/>
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="descripcion" className="form-label fs-5">Descripción:</label>
                    <textarea id="descripcion" name="resumen" className="form-control" rows="6" onChange={manejarInputs}></textarea>
                </div>
                <div className="form-group mb-5 mx-4">
                    <label htmlFor="image" className="form-label fs-5">Imagen:</label>
                    <input type="file" id="image" name="image" className="form-control" onChange={manejarInputs}/>
                </div>
                <div className="form-group text-center">
                    <input type="submit" value="Crear nuevo libro" className="btn btn-primary mb-3 w-50 fs-5" />
                </div>
            </form>
        </div>
    );
};