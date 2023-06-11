import React, {useState, useEffect} from 'react';
import '../styles/size.css';
import { Link } from "react-router-dom";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import AutoCompletado from './carrito-compras/autoCompletado';

function Cabezera() {

    // Cabezera
    const [dropdown, setDropdown] = useState(false);

    const abrirCerrarDropdown = () =>{
        setDropdown(!dropdown);
    }

    return (
      <header className='contenedor-cabezera d-flex flex-column w-100'>
            <div className='inicio-menu d-flex justify-content-around align-items-center mt-3'>
                    <Link to={"/"} >
                    <img 
                        className='logo size-logo'
                        src={require(`../img/logo.png`)}
                        alt='logo de la página web'/>
                    </Link>

                    <div className='contenedor-buscador d-flex justify-content-center'>
                        <AutoCompletado/>
                        <Link  onClick={() => {window.location.href="/itemListarBuscador"}}>
                            <button className='h-100'>
                                <img 
                                className='icono-buscar size-buscador'
                                src={require(`../img/google-icons/icon-buscar.png`)}
                                alt='icono de un buscador'/>
                            </button>
                        </Link>
                    </div>

                    <div className='d-flex align-items-center'>
                        <div  className='contenedor-carrito me-4'>
                            <span className='cart-count'></span>
                            <Link to={"/cart"}>
                                <img 
                                className="size-carrito"
                                src={require(`../img/google-icons/carrito.png`)}
                                alt='icono de un carrito de compras'/>
                            </Link>
                        </div>

                        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} className='size-desplegable'>
                            <DropdownToggle className="bg-transparent border border-light">
                                <img 
                                className='icono-usuario size-login'
                                src={require(`../img/google-icons/icon-user.png`)}
                                alt='icono de un usuario'/>
                            </DropdownToggle>
                            <DropdownMenu className='desplegable'>
                                <Link to={'/registro'} className='text-dark text-decoration-none'>
                                    <DropdownItem>Registrarse</DropdownItem>
                                </Link>
                                
                                <Link to={'/inciarSesion'} className='text-dark text-decoration-none'>
                                    <DropdownItem>Iniciar Sesion</DropdownItem>
                                </Link>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
            </div>
            <div className='opciones-menu'>
                  <nav className='mt-3 w-100 bg-dark py-3'>
                      <ul className="navbar-nav justify-content-start align-items-center d-flex flex-row pe-3">
                          <Link className="nav-item mx-3 text-decoration-none">
                              <li className="nav-link text-dark text-white" href="google.com">Destacados</li>
                          </Link>
                          <Link className="nav-item me-3 text-decoration-none">
                              <li className="nav-link text-dark text-white" href="google.com">¿Quienes somos?</li>
                          </Link>
                          <Link to={"/comprarLibros"} className="nav-item me-3 text-decoration-none">
                              <li className="nav-link text-dark text-white" href="google.com">Comprar libros</li>
                          </Link>
                          <Link className="nav-item text-decoration-none">
                              <li className="nav-link text-dark text-white" href="google.com">Ubicación</li>
                          </Link>
                          <Link to={"/leer"} className="nav-item text-decoration-none ms-3">
                              <li className="nav-link text-dark text-white" href="google.com">Administrar libros</li>
                          </Link>
                      </ul>
                  </nav>
            </div>
      </header>
    );
  }

  export default Cabezera;