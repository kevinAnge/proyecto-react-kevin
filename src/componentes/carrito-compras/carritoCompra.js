import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contenido/ContenidoCarritoCompra";
let idItem = 0;

export const ShoppingCart = () => {

//carrito compra
  const [cart, setCart] = useContext(CartContext);
  

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  //eliminar libro del carrito
  const removeItem = (idItem) => {
    const itemsActualizados = cart.filter((item) => item.id !== idItem);
    setCart(itemsActualizados);
  }

  //guardar libros comprados en el carrito
  const [guadarLibro, setGuadarLibro] = useState();

  const guardarLibrosCarrito = (e) => {
      setGuadarLibro(e.target.value);
  }

  function guardarCarrito(e){

      e.preventDefault();

      const librosCarrito = {
        id_libros: guadarLibro,
        id_usuarios: 1,
      }

      console.log(guadarLibro);
  }

  return (
    <form onSubmit={guardarCarrito}>
        <table className="table table-hover my-0 border border-dark w-75 mx-auto mt-5 mb-2 estilo-tabla">
        <thead className="bg-dark text-white">
          <tr className="text-center">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
              {
                cart.map((item) => {
                  return(
                    <tr className="text-center">
                      <td key={idItem+1}>
                        <input type="hidden" value={item.id} name={`id_libros${item.id}`} onSubmit={()=>{setGuadarLibro(item.id)}}/>
                        <img src={`.${item.imgUrl}`} alt="item" className="img-cart pt-3"/>
                      </td>
                      <td key={idItem+2} className="py-4">{item.name}</td>
                      <td key={idItem+3} className="py-4">{item.price}€</td>
                      <td key={idItem+4} className="py-4">{item.quantity}</td>
                      <td key={idItem+5}>
                        <img src={require(`../../img/google-icons/eliminar.png`)} alt="eliminar" className="img-eliminar py-3 btn-delete" onClick={() => removeItem(item.id)}/>
                      </td>
                    </tr>
                  )
                  idItem++;
                })
              }
        </tbody>
        <tfoot className="bg-dark text-white">
          <tr>
            <th colSpan="5" className="text-end px-5">Precio Total: {totalPrice}€</th>
          </tr>
        </tfoot>
      </table>
      <div className="w-100 d-flex justify-content-center">
            <input type="submit" value="Comprar Todo" className="btn btn-primary my-4 fs-5"/>
      </div>
    </form>
  );
};
