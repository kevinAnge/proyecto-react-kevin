import React, { useState, useEffect, useContext } from "react";
import storeItems from "../datos/productos.json";
import { CartContext } from "../contenido/ContenidoCarritoCompra";

export default function Descripcion(){
    //local storage
    const [idLibro, setIdLibro] = useState([]);
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        setIdLibro(JSON.parse(localStorage.getItem('idLibro')));
    }, []);

    //descripcion del libro
    const libro = storeItems.filter(libro => libro.id == idLibro);

    const addToCart = ({id, price, name, imgUrl}) => {
        setCart((currItems) => {
        const isItemsFound = currItems.find((item) => item.id === id);
        if (isItemsFound) {
            return currItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
            });
        } else {
            return [...currItems, { id, quantity: 1, price, name, imgUrl }];
        }
        });
    };

    return (
        <div className="contenedor-libro-descripcion mx-auto">
            {libro.map((miLibro) => 
               {return(
                    <div className="libro-descripcion">
                        <h2 className="fw-bold text-center mb-4">{miLibro.name}</h2>
                        <div className="contenedor-caracteristica">
                            <img src={miLibro.imgUrl} className="libro-img" alt="libro"/>
                            <div className="caracteristicas-libro">
                                <div className="contenedor-caracteristicas">
                                    <p><span className="fw-bold">Autor: </span> {miLibro.autor}</p>
                                    <p><span className="fw-bold">Categoria: </span> {miLibro.category}</p>
                                    <p className="mb-0"><span className="fw-bold">Precio: </span> {miLibro.price}€ </p>
                                </div>
                                <div className="texto-descripcion">
                                    <p className="mb-1"><span className="fw-bold">Resumen:</span></p>
                                    <p>{miLibro.resumen}</p>
                                </div>
                                <div className="contenedor-boton">
                                    <button className="fw-bold animacion-boton" onClick={() => addToCart(miLibro)}>
                                        Agregar al carrito
                                        <span></span><span></span><span></span><span></span>
                                    </button>
                                    <img src={require(`../img/google-icons/corazon-negro.png`)} alt="corazon" className="ms-2 corazon"/>
                                </div>
                            </div>
                        </div>
                     </div>
                );}
            )}
        </div>
    );
};