import React from "react";
import { Link } from "react-router-dom";

const Pie = () => {
  return (
    <footer className="d-flex flex-wrap flex-column justify-content-center align-items-center py-4 border-top bg-dark">
        <p className="mb-4 text-white h6 text-center">©2023 Biblioteca universal, Kevin Angel Ortiz Cusirramos</p>
        <ul className="nav list-unstyled d-flex justify-content-evenly mb-3">
            <Link to="#" className="text-decoration-none text-white">
                <li className="mx-3">Nombre de la empresa</li>
            </Link>
            <Link to="#" className="text-decoration-none text-white">
                <li className="mx-3">Contacto</li>
            </Link>
            <Link to="#" className="text-decoration-none text-white">
                <li className="mx-3">Aviso legal</li>
            </Link>
            <Link to="#" className="text-decoration-none text-white">
                <li className="mx-3">Privacidad del sitio</li>
            </Link>
            <Link to="#" className="text-decoration-none text-white">
                <li className="mx-3">Condiciones de uso</li>
            </Link>
            <Link to="#" className="text-decoration-none text-white">
                <li className="mx-3">Condiciones de venta</li>
            </Link>
        </ul>
        <ul className="nav list-unstyled d-flex justify-content-evenly">
            <Link to="https://es-es.facebook.com/">
                <li className="mx-3">
                    <img src={require('../img/google-icons/facebook.png')} className="social-icons" alt="Logo de facebook" />
                </li>
            </Link>
            <Link to="https://www.instagram.com/">
                <li className="mx-3">
                    <img src={require('../img/google-icons/instagram.png')} className="social-icons" alt="Logo de instagram" />
                </li>
            </Link>
            <Link to="https://twitter.com/?lang=es">
                <li className="mx-3">
                    <img src={require('../img/google-icons/twitter.png')} className="social-icons" alt="Logo de twitter" />
                </li>
            </Link>
        </ul>
    </footer>
  );
};

export default Pie;