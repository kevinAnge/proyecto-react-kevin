import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export const Registro = () => {

    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form className="border border-dark rounded registro width-form">
                <h1 className="text-center mt-3 text-uppercase fs-2">Registro</h1>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="usuario" className="form-label fs-5">Usuario:</label>
                    <input type="text" id="usuario" className="form-control" />
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="correo" className="form-label fs-5">Correo electronico:</label>
                    <input type="email" id="correo" className="form-control" />
                </div>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="password" className="form-label fs-5">Contraseña:</label>
                    <input type="password" id="password" className="form-control" />
                </div>
                <div className="form-group mb-5 mx-4">
                    <label htmlFor="repetirPassword" className="form-label fs-5">Repetir contraseña:</label>
                    <input type="password" id="repetirPassword" className="form-control" />
                </div>
                <div className="form-group text-center">
                    <input type="submit" value="Registrarse" className="btn btn-primary mb-3 w-50 fs-5" />
                </div>
            </form>
        </div>
    );
}

export const Login = () => {

    const [usuarios, setUsers] = useState([]);
   
    useEffect(() => {
        (async () => await cargarUsuarios())();
    }, []);
   
    async function  cargarUsuarios(){
        {
            const result = await axios.get(
            "http://127.0.0.1:8000/api/usuarios");
            setUsers(result.data);
        }
   
    }

    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form  className="border border-dark rounded login width-form">
                <h1 className="text-center mt-3 text-uppercase fs-2">Inicio Sesion </h1>
                <p className="text-danger text-center">Debe rellenar todos los datos</p>
                <div className="form-group mb-2 mx-4">
                    <label htmlFor="usuario" className="form-label fs-5">Usuario:</label>
                    <input type="text" id="usuario" value={usuarios[0].correo} className="form-control" />
                </div>
                <div className="form-group mb-5 mx-4">
                    <label htmlFor="password" className="form-label fs-5">Contraseña:</label>
                    <input type="password" id="password" className="form-control" />
                </div>
                <div className="form-group text-center">
                    <input type="submit" value="Iniciar Sesion" className="btn btn-primary mb-3 w-50 fs-5" />
                </div>
            </form>
        </div>
    );
}