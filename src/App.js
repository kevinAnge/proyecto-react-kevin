import React from "react";
import { ItemList } from "./componentes/carrito-compras/ItemListar";
import Cabezera from "./componentes/cabezera";
import Pie from "./componentes/pie";
import Descripcion from "./componentes/descripcion";
import Cuerpo from "./componentes/cuerpo";
import {Registro, Login} from "./componentes/formularios/loginRegistro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./componentes/carrito-compras/carritoCompra";
import { ShoppingCartProvider } from "./contenido/ContenidoCarritoCompra";
import ItemListarBuscador from "./componentes/carrito-compras/itemListarBuscador";
import { Leer } from "./componentes/crud/leer";
import { Actualizar } from "./componentes/crud/actualizar";
import { Crear } from "./componentes/crud/crear";

const App = () => {

  return (
    <ShoppingCartProvider>
      <Router>
        <Cabezera />
        <Routes>
          <Route path="/" element={<Cuerpo />}/>
          <Route path="/itemListarBuscador" element={<ItemListarBuscador />}/>
          <Route path="/descripcion" element={<Descripcion />}/>
          <Route path="/comprarLibros" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inciarSesion" element={<Login />} />
          <Route path="/leer" element={<Leer />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/actualizar" element={<Actualizar />} />
        </Routes>
        <div id="disqus_thread"></div>
        <Pie />
      </Router>
    </ShoppingCartProvider>
  );
};

export default App;