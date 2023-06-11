import React from "react";

export const Item = ({name, price, imgUrl, autor, category }) => {

  return (
      <div className="item-box">
            <img src={imgUrl} className="libros-catalogo" alt="libro"/>
            <div className="capa">
              <h3 className="fw-bold">{name}</h3>
              <h4 className="text-white">Autor: {autor}</h4>
              <p>Categoria: {category}</p>
              <p>Precio: {price}€</p>
            </div>
      </div>
  );
};
