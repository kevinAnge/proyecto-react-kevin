
import React, {useState, useEffect} from 'react';
import storeItems from "../../datos/productos.json";
import { Link } from 'react-router-dom';

function ItemListarBuscador() {

    //local storage
    const [buscar, setBuscador] = useState([]);

    useEffect(() => {
        const buscar =  JSON.parse(localStorage.getItem('guardarBuscador'));
        if (buscar) {
            setBuscador(buscar);
        }
    }, []);

    const [idLibro, setIdLibro] = useState("");

    useEffect(() => {
        localStorage.setItem("idLibro", JSON.stringify(idLibro));
    }, [idLibro]);

    //Listar items en el buscador
    const libros = storeItems.filter(libro => libro.name.toLocaleLowerCase().includes(buscar));

    return (
        <div className='contenedor-libros-buscar'>
            {libros.length == 0 ? <h1 className='text-center mensaje-error'>No se han encontrado los resultados</h1> : libros.map((libros) => {
                    return(
                        <div className='contenedor-buscador-div w-100 my-5'>
                            
                            <Link to={"/descripcion"} className="libros-buscador" onMouseOver={() => {setIdLibro(libros.id)}}>
                                <img src={libros.imgUrl} className='rounded-3' alt="libro"/>
                            </Link>
                            
                            <div className='d-flex flex-column contenedor-texto rounded-3'>
                                <h3 className="fw-bold py-1 my-2">{libros.name}</h3>
                                <h4 className="autor py-1">Autor: {libros.autor}</h4>
                                <p className='fs-5 my-2'>Categoria: {libros.category}</p>
                                <p className='fs-5 my-2'>Precio: {libros.price}€</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
  }

  export default ItemListarBuscador;



  