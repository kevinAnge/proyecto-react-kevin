import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
let idItem = 0;

export const Leer = () => {

    //localstorage
    const [idActualizarLibro, setidActualizarLibro] = useState("");

    useEffect(() => {
        localStorage.setItem("idActualizarLibro", JSON.stringify(idActualizarLibro));
    }, [idActualizarLibro]);

    //conexion apirest
    const [libros, setLibros] = useState([]);
   
    useEffect(() => {
        (async () => await cargarLibros())();
    }, []);
   
    async function  cargarLibros(){

        setTimeout(async () => {
            const result = await axios.get(
                "http://127.0.0.1:8000/api/libros");
                setLibros(result.data);
          }, 100);
   
    }

    async function eliminarLibro(id, confirmar){
        if(confirmar == true){
            setTimeout(async () => {
                await axios.delete("http://127.0.0.1:8000/api/libro/" + id);
                cargarLibros();
            }, 100);
        }
   }

    //Leer CRUD

    return (
        <div>
            <Link to={"/crear"} className="w-100 d-flex justify-content-center my-3">
                <button className="btn btn-primary">Crear nuevo Libro</button>
            </Link>
            <table className="table table-hover my-0 border border-dark w-75 mx-auto mb-5 estilo-tabla">
                <thead className="bg-dark text-white">
                    <tr className="text-center">
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        libros.map((item) => {
                        
                            return(
                            <tr className="text-center" key={item.id}>
                                <td key={idItem+1}>
                                    <img src={require('../../img/libros/book-action4.jpg')} alt="item" className="img-cart pt-3"/>
                                </td>
                                <td key={idItem+2} className="py-4">{item.titulo}</td>
                                <td key={idItem+3} className="py-4">{item.autor}</td>
                                <td key={idItem+4} className="py-4">{item.categoria}</td>
                                <td key={idItem+5} className="py-4">{item.precio}€</td>
                                <td key={idItem+6}>
                                    <Link to={"/actualizar"} onMouseOver={() =>{setidActualizarLibro(item)}}>
                                        <img src={require(`../../img/google-icons/editar.png`)} alt="editar" className="img-eliminar py-3 btn-delete"/>
                                    </Link>
                                </td>
                                <td key={idItem+7}>
                                    <img src={require(`../../img/google-icons/eliminar.png`)} alt="eliminar" className="img-eliminar py-3 btn-delete" onClick={() => {
                                        const confirmar = confirm("Estas seguro de eliminar este libro");
                                        eliminarLibro(item.id_libros, confirmar);
                                    }}/>
                                </td>
                            </tr>
                            )
                            idItem++;
                        })
                    }
                </tbody>
        </table>
    </div>
  );
};