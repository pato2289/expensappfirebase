import React, { useState, useContext } from 'react'
import style from './style.scss';
import Boton from '../ui/Boton/boton';

import { FirebaseContext } from '../../firebase';
import validarCrearInquilino from '../../validacion/validarCrearInquilino';
import useValidacion from '../../hooks/useValidacion';

const STATE_INICIAL = {
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    password: '',
    consorcio: '',
    pisodpto: ''
}

const SignIn = () => {

    const [error, guardarError] = useState(false);

    const {valores,errores,handleSubmit,handleChange,handleBlur} = useValidacion(STATE_INICIAL, validarCrearInquilino, crearInquilino);

    const { nombre, apellido, dni, email, password, consorcio, pisodpto } = valores;

    const { firebase } = useContext(FirebaseContext);

    async function crearInquilino() {
        // creo el objeto "inquilino"
        const inquilino = { nombre, apellido, dni, email, password, consorcio, pisodpto }

        // lo inserto en la BD
        firebase.db.collection('inquilino').add(inquilino)

        console.log('Se creo el inquilino: ', inquilino)

    }


    return ( 
        <>
        <div className={style.signContainer}>
            <h1 className={style.title}>
                Crear Cuenta
            </h1>
            <form 
                className={style.signForm}
                onSubmit={handleSubmit}
            >
                <div className={style.input}>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        value={apellido}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Dni</label>
                    <input
                        type="number"
                        name="dni"
                        value={dni}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Consorcio</label>
                    <input
                        type="texto"
                        name="consorcio"
                        value={consorcio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Piso y Dpto</label>
                    <input
                        type="texto"
                        name="pisodpto"
                        value={pisodpto}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.botonForm}>
                <button type="submit">Crear Cuenta</button>
                </div>
            </form>
            <div className={style.botonera}>
                <Boton
                    href="/"
                    texto="Volver"
                />
            </div>
        </div>
            
        </>
     );
}
 
export default SignIn;