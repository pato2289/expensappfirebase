import React, { useState, useContext } from 'react'
import style from './style.scss';

import Boton from '../../ui/Boton/boton';

import { FirebaseContext } from '../../../firebase';
import useValidacion from '../../../hooks/useValidacion';
import validarCrearConsorcio from '../../../validacion/validarCrearConsorcio';

const STATE_INICIAL = {
    direccion: '',
    barrio: '',
    cp: '',
    cantdptos: ''
}

const NuevoConsorcio = () => {

    const [error, guardarError] = useState(false);

    const {valores,errores,handleSubmit,handleChange,handleBlur} = useValidacion(STATE_INICIAL, validarCrearConsorcio, crearConsorcio);

    const { direccion, barrio, cp, cantdptos } = valores;

    const { firebase } = useContext(FirebaseContext);

    async function crearConsorcio() {

        const consorcio = { direccion, barrio, cp, cantdptos }

        firebase.db.collection('consorcios').add(consorcio);

        console.log('Se creo el consorcio: ', consorcio);

    }

    return (
        <> 
            <h1 className={style.title}>
                Crear Consorcio
            </h1>
            <form 
                className={style.signForm}
                onSubmit={handleSubmit}
            >
                <div className={style.input}>
                    <label>Direccion</label>
                    <input
                        type="text"
                        name="direccion"
                        value={direccion}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Barrio</label>
                    <input
                        type="text"
                        name="barrio"
                        value={barrio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>Cant. Dptos</label>
                    <input
                        type="number"
                        name="cantdptos"
                        value={cantdptos}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.input}>
                    <label>CP</label>
                    <input
                        type="number"
                        name="cp"
                        value={cp}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className={style.botonForm}>
                    <button type="submit">Crear Consorcio</button>
                </div>
            </form>
            <div className={style.botonera}>
                <Boton
                    href="/"
                    texto="Volver"
                />
            </div>
        </>
     );
}
 
export default NuevoConsorcio;